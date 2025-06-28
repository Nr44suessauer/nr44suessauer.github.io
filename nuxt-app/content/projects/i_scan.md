---
title: i_Scan
description: custom open source 3D scanner - Meshroom Guide
---

# Meshroom: Windows-Guide für 3D-Photogrammetrie

Meshroom ist kostenlose Open-Source-Software, die aus 2D-Fotos automatisch 3D-Modelle erstellt.

## 🛠️ Windows-Installation

### Hardware-Anforderungen:
- **Windows 10/11** 64-bit
- **16+ GB RAM** (32GB empfohlen)
- **NVIDIA RTX 3060+** mit 8GB VRAM
- **50+ GB freier SSD-Speicher**

### Installation:
1. [Meshroom herunterladen](https://github.com/alicevision/meshroom/releases)
2. ZIP nach `C:\Tools\Meshroom\` entpacken
3. NVIDIA-Treiber aktualisieren
4. `Meshroom.exe` starten

---

## 📸 Fotos richtig aufnehmen

### Grundregeln:
- **60-80% Überlappung** zwischen Fotos
- **50-100 Fotos** um das Objekt herum
- **Konstante Beleuchtung** (bewölkter Himmel optimal)
- **Scharfe Fotos** mit Stativ
- **Manuelle Kamera-Einstellungen** fixieren

### Aufnahme-Sequence:
```markdown
1. Ring auf Augenhöhe: 30-50 Fotos
2. Ring 45° nach oben: 20-30 Fotos  
3. Von oben: 10-20 Fotos
4. Details-Shots: 10-20 Fotos
```

---

## 🔄 Workflow

### 1. Projekt starten:
- Meshroom öffnen
- Fotos per Drag & Drop hinzufügen
- EXIF-Daten prüfen (konstante Brennweite!)

### 2. Verarbeitung starten:
- Grünen "Start"-Button klicken
- **Verarbeitungszeit:** 1-4 Stunden je nach Hardware

### 3. Ergebnis prüfen:
- 3D-Modell im Viewer kontrollieren
- Output in `MeshroomCache/Texturing/`
- Dateien: `texturedMesh.obj` + Texturen

---

## 🚨 Windows-spezifisches Troubleshooting

### Häufige Windows-Probleme und Lösungen

#### Problem: "CUDA-Fehler beim DepthMap"
**Symptome:** Roter DepthMap-Node, GPU-Speicher-Fehler

**Windows-spezifische Lösungen:**
```powershell
# 1. NVIDIA-Treiber neu installieren (DDU verwenden)
# Download Display Driver Uninstaller: https://www.guru3d.com/files-details/display-driver-uninstaller-download.html

# 2. CUDA-Installation prüfen
nvcc --version
nvidia-smi

# 3. Windows GPU-Scheduling deaktivieren
# Einstellungen → System → Anzeige → Grafikeinstellungen → Hardware-beschleunigte GPU-Planung: AUS

# 4. TDR-Timeout erhöhen (Registry)
$regPath = "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers"
Set-ItemProperty -Path $regPath -Name "TdrDelay" -Value 60 -Type DWord
```

#### Problem: "Meshroom startet nicht / Access Denied"
**Symptome:** Fehler beim Start, Permission-Probleme

**Lösungen:**
```powershell
# 1. Als Administrator ausführen
Start-Process "C:\Tools\Meshroom\Meshroom.exe" -Verb RunAs

# 2. Windows Defender Ausnahme hinzufügen
Add-MpPreference -ExclusionPath "C:\Tools\Meshroom"
Add-MpPreference -ExclusionPath "C:\Meshroom_Projects"

# 3. Berechtigungen setzen
icacls "C:\Tools\Meshroom" /grant Everyone:(OI)(CI)F /T
```

#### Problem: "Out of Memory bei großen Projekten"
**Symptome:** Crash bei DepthMap/Meshing

**Windows-Memory-Management:**
```powershell
# 1. Auslagerungsdatei vergrößern
# Systemsteuerung → System → Erweiterte Systemeinstellungen
# Leistung → Einstellungen → Erweitert → Virtueller Arbeitsspeicher
# Benutzerdefiniert: Min = RAM-Größe, Max = 3x RAM-Größe

# 2. Andere Anwendungen schließen
Get-Process | Where-Object {$_.WorkingSet -gt 100MB -and $_.Name -ne "Meshroom"} | Stop-Process -Force

# 3. Windows Memory Compression deaktivieren
Disable-MMAgent -MemoryCompression

# 4. Meshroom-Parameter anpassen
# Group Size: 1 (statt 3)
# Downscale: 4 (statt 2)
```

#### Problem: "Texturing schlägt fehl"
**Symptome:** Fehler beim Export, korrupte Texturen

**Windows-Pfad-Probleme lösen:**
```powershell
# 1. Kurze Pfade verwenden (Windows-Limitation)
# Schlecht: C:\Users\MeinLangerBenutzername\Documents\Meine langen Projektnamen\...
# Gut: C:\MP\Projekt1\

# 2. Sonderzeichen vermeiden
# Keine Umlaute, Leerzeichen oder Symbole in Pfaden

# 3. NTFS-Kompression deaktivieren
compact /u /s:C:\Meshroom_Projects /i

# 4. Schreibrechte prüfen
Test-Path "C:\Meshroom_Projects\" -IsValid
```

### Windows-Performance-Probleme

#### CPU-Throttling verhindern:
```powershell
# Thermal Throttling überwachen
# HWiNFO64 installieren: https://www.hwinfo.com/download/

# Power Limit erreicht → Undervolting mit ThrottleStop
# Download: https://www.techpowerup.com/download/techpowerup-throttlestop/
```

#### Festplatten-Optimierung:
```powershell
# SSD-Gesundheit prüfen
Get-PhysicalDisk | Get-StorageReliabilityCounter

# Defragmentierung für HDD (nicht SSD!)
Optimize-Volume -DriveLetter C -Defrag

# Temporäre Dateien bereinigen
Remove-Item $env:TEMP\* -Recurse -Force -ErrorAction SilentlyContinue
```

### 🔧 Windows-Automatisierung

#### PowerShell-Monitoring-Script:
```powershell
# Datei: MeshroomMonitor.ps1
param([string]$ProjectPath)

$logFile = "$ProjectPath\meshroom_log.txt"
$startTime = Get-Date

Write-Host "Meshroom-Monitoring gestartet..." -ForegroundColor Green

while ($true) {
    $gpu = nvidia-smi --query-gpu=memory.used,memory.total,temperature.gpu --format=csv,noheader,nounits
    $ram = Get-Counter "\Memory\Available MBytes"
    $cpu = Get-Counter "\Processor(_Total)\% Processor Time"
    
    $status = "$(Get-Date): GPU: $gpu | RAM frei: $($ram.CounterSamples[0].CookedValue)MB | CPU: $($cpu.CounterSamples[0].CookedValue)%"
    
    Write-Host $status -ForegroundColor Cyan
    Add-Content $logFile $status
    
    # Überhitzungswarnung
    $temp = ($gpu -split ",")[2]
    if ([int]$temp -gt 85) {
        Write-Host "WARNUNG: GPU-Temperatur zu hoch: ${temp}°C" -ForegroundColor Red
        # Optional: Meshroom pausieren
    }
    
    Start-Sleep 60
}
```

#### Batch-Verarbeitung mehrerer Projekte:
```powershell
# Datei: BatchProcess.ps1
$projects = @(
    "C:\Meshroom_Projects\Objekt1",
    "C:\Meshroom_Projects\Objekt2",
    "C:\Meshroom_Projects\Objekt3"
)

foreach ($project in $projects) {
    Write-Host "Starte Projekt: $project" -ForegroundColor Yellow
    
    # Meshroom-Kommandozeile verwenden
    $photos = Get-ChildItem "$project\02_Photos_Processed\*.jpg"
    $outputPath = "$project\04_Final_Models"
    
    & "C:\Tools\Meshroom\meshroom_batch.exe" --input $project\02_Photos_Processed --output $outputPath
    
    # Warten bis fertig (vereinfacht)
    Start-Sleep 3600  # 1 Stunde Wartezeit pro Projekt
}
```

---

## 💡 Windows Best Practices und Profi-Tipps

### 🎯 Hardware-Setup für Windows

#### Optimale Windows-Konfiguration:
```markdown
💻 Empfohlenes System (2025):
• CPU: Intel i7-13700K oder AMD Ryzen 7 7700X
• GPU: NVIDIA RTX 4070 (12GB VRAM) oder besser
• RAM: 32GB DDR5-5600 (2x16GB Kit)
• Storage: 2TB NVMe Gen4 SSD (Samsung 980 Pro)
• Motherboard: B650/Z790 mit PCIe 5.0
• PSU: 750W 80+ Gold (für GPU-Headroom)
• Kühlung: AIO 240mm oder besserer Luftkühler
```

#### Windows 11 Pro Optimierungen:
```powershell
# Ultimate Performance Mode aktivieren
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61

# Game Mode deaktivieren (kann mit Meshroom interferieren)
Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AllowAutoGameMode" -Value 0

# Background Apps deaktivieren
Get-AppxPackage | Where-Object {$_.Name -like "*Xbox*"} | Remove-AppxPackage
```

### 📸 Windows-Foto-Workflow Professionell

#### RAW-Processing mit kostenlosen Tools:
```powershell
# 1. RawTherapee für RAW-Entwicklung
# Download: https://rawtherapee.com/downloads/
# Batch-Queue für konstante Belichtung/Farbe

# 2. XnConvert für Batch-Resize
# Download: https://www.xnview.com/en/xnconvert/
# Batch-Action: Resize to 4MP, Sharpen, JPEG Quality 95%

# 3. ExifTool für Metadaten-Check
exiftool -FocalLength -ISO -FNumber *.jpg > camera_settings.txt
```

#### Smartphone-Fotos optimieren:
```markdown
📱 iPhone/Android → Meshroom:
1. Fotos im HEIF/RAW+ Modus aufnehmen
2. Mit HEIF Utility in JPEG konvertieren
3. DxO PhotoLab Mobile für gleichmäßige Belichtung
4. Auf PC übertragen via USB (nicht Cloud!)
5. Batch-Resize auf 3000px längste Seite
```

### 🚀 Performance-Maximierung

#### GPU-Overclocking für Meshroom:
```powershell
# MSI Afterburner Profile erstellen
# Memory Clock: +500-800 MHz (langsam testen!)
# Core Clock: +100-200 MHz
# Power Limit: 110-120%
# Temperature Limit: 83°C

# NVIDIA Inspector Alternative
# Download: https://www.techpowerup.com/download/nvidia-inspector/
```

#### RAM-Timing optimieren:
```markdown
🔧 BIOS-Einstellungen:
• XMP/DOCP Profil aktivieren
• RAM-Spannung: 1.35V (DDR4) / 1.25V (DDR5)
• Infinity Fabric 1:1 Ratio (AMD)
• Memory Training: Enabled
```

#### Windows-Storage-Optimierung:
```powershell
# ReFS für große Dateien (besser als NTFS)
Format-Volume -DriveLetter D -FileSystem ReFS -AllocationUnitSize 64KB

# Storage Spaces für RAID-ähnliche Performance
$disks = Get-PhysicalDisk -CanPool $true
New-StoragePool -FriendlyName "MeshroomPool" -StorageSubSystemFriendlyName "Storage Spaces*" -PhysicalDisks $disks
```

### 🎨 Workflow-Automatisierung

#### PowerShell-GUI für Meshroom:
```powershell
# Datei: MeshroomGUI.ps1
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form = New-Object System.Windows.Forms.Form
$form.Text = "Meshroom Project Manager"
$form.Size = New-Object System.Drawing.Size(400,300)

$buttonNewProject = New-Object System.Windows.Forms.Button
$buttonNewProject.Text = "Neues Projekt"
$buttonNewProject.Location = New-Object System.Drawing.Point(20,20)
$buttonNewProject.Add_Click({
    $folderDialog = New-Object System.Windows.Forms.FolderBrowserDialog
    if ($folderDialog.ShowDialog() -eq "OK") {
        # Projekt-Setup ausführen
        & "C:\Tools\meshroom_helper.ps1" -PhotosFolder $folderDialog.SelectedPath
    }
})

$form.Controls.Add($buttonNewProject)
$form.ShowDialog()
```

#### Qualitätskontrolle-Automation:
```powershell
# EXIF-Validator für Foto-Konsistenz
function Test-PhotoConsistency {
    param([string]$FolderPath)
    
    $photos = Get-ChildItem "$FolderPath\*.jpg"
    $firstPhoto = $photos[0]
    $referenceExif = Get-ExifData $firstPhoto.FullName
    
    $inconsistentPhotos = @()
    
    foreach ($photo in $photos[1..$photos.Count]) {
        $exif = Get-ExifData $photo.FullName
        if ($exif.FocalLength -ne $referenceExif.FocalLength) {
            $inconsistentPhotos += $photo.Name
        }
    }
    
    if ($inconsistentPhotos.Count -gt 0) {
        Write-Warning "Inkonsistente Brennweiten gefunden in: $($inconsistentPhotos -join ', ')"
        return $false
    }
    
    Write-Host "✅ Alle Fotos haben konsistente EXIF-Daten" -ForegroundColor Green
    return $true
}
```

### 🔧 Post-Processing mit Windows-Tools

#### MeshLab-Integration:
```powershell
# MeshLab für erweiterte Mesh-Bearbeitung
# Download: https://www.meshlab.net/#download

# Automatisches MeshLab-Scripting
$meshlabScript = @"
<?xml version="1.0" encoding="UTF-8"?>
<FilterScript>
    <filter name="Remove Duplicate Vertices"/>
    <filter name="Remove Unreferenced Vertices"/>
    <filter name="Close Holes">
        <Param type="RichInt" value="30" name="MaxHoleSize"/>
    </filter>
    <filter name="Laplacian Smooth">
        <Param type="RichInt" value="3" name="stepSmoothNum"/>
    </filter>
</FilterScript>
"@

$meshlabScript | Out-File "C:\Tools\meshlab_cleanup.mlx"

# Batch-Processing mit MeshLab
meshlabserver -i input.obj -o output.obj -s meshlab_cleanup.mlx
```

#### 3D-Viewer Integration:
```powershell
# Windows 3D Viewer für Qualitätskontrolle
# Paint 3D für einfache Bearbeitung
# Blender für professionelle Nachbearbeitung

# Registry-Integration für OBJ-Dateien
$objHandler = "HKCR\.obj"
Set-ItemProperty -Path $objHandler -Name "(default)" -Value "Meshroom.OBJ"

$objCommand = "HKCR\Meshroom.OBJ\shell\open\command"
New-Item -Path $objCommand -Force
Set-ItemProperty -Path $objCommand -Name "(default)" -Value '"C:\Program Files\Blender Foundation\Blender 4.0\blender.exe" "%1"'
```

### 📊 Benchmarking und Profiling

#### Meshroom-Performance testen:
```powershell
# Standard-Testdatensatz erstellen
$testPhotos = @(1..50) | ForEach-Object {
    "TestPhoto_$(($_ -as [string]).PadLeft(3,'0')).jpg"
}

# Performance-Benchmark
$benchmark = @{
    "FeatureExtraction" = @{}
    "DepthMap" = @{}
    "Meshing" = @{}
}

Measure-Command {
    # Meshroom-Pipeline ausführen
    # Zeiten messen und in $benchmark speichern
}
```

### 🎯 Projektspezifische Best Practices

#### Architektur-Scans optimieren:
```markdown
🏛️ Gebäude/Architektur (Windows-Workflow):
• DJI Fly App → Automatische Flugpläne
• Lightroom Classic → Batch-HDR-Processing  
• CloudCompare → Ground Control Points
• Meshroom → High-Quality Settings
• Recap Pro → Vermessungsqualität
```

#### Objekt-Scanning für E-Commerce:
```markdown
📦 Produkt-Photography → 3D:
• Drehteller mit Schrittmotor (Arduino-gesteuert)
• Canon EOS Utility → Tethered Shooting
• Helicon Focus → Focus-Stacking
• Meshroom → Automated Batch-Processing
• Marmoset Toolbag → Web-Export
```

**Fazit für Windows-User:** Mit der richtigen Konfiguration und den passenden Tools wird Windows zur optimalen Plattform für Meshroom-basierte 3D-Photogrammetrie. Die Investition in gute Hardware und ordentliche Workflows zahlt sich durch drastisch verkürzte Verarbeitungszeiten aus! 🚀

---

## 🎯 Fazit

Meshroom ist ein mächtiges Tool für 3D-Photogrammetrie, das mit der richtigen Technik professionelle Ergebnisse liefert. Die wichtigsten Erfolgsfaktoren sind:

1. **Qualität der Fotos** (60% des Erfolgs)
2. **Ausreichende Überlappung** (20% des Erfolgs)  
3. **Richtige Parameter** (15% des Erfolgs)
4. **Hardware-Performance** (5% des Erfolgs)

Mit diesem Tutorial solltest du in der Lage sein, hochwertige 3D-Modelle aus deinen Fotos zu erstellen. Experimentiere mit verschiedenen Einstellungen und entwickle ein Gefühl für die optimalen Parameter für deine spezifischen Anwendungsfälle.

**Viel Erfolg bei deinen 3D-Projekten! 🚀**

---

*Dieses Tutorial wurde für das i_Scan Projekt erstellt. Für weitere Tutorials und Updates, besuche [DeadLineDriven.dev](https://deadlinedriven.dev)*


