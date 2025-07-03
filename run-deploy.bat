@echo off
echo Starte Deployment-Prozess...
echo.

REM Prüfe, ob Git Bash installiert ist
where git >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    REM Git ist installiert, versuche mit Git Bash
    echo Git gefunden, verwende Git Bash...
    start "" "C:\Program Files\Git\bin\bash.exe" --login -i "%~dp0scripts\deploy.sh"
) else (
    REM Wenn Git nicht gefunden, prüfe auf WSL
    wsl --list >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo WSL gefunden, verwende WSL...
        wsl bash "%~dp0scripts\deploy.sh"
    ) else (
        REM Wenn weder Git noch WSL verfügbar, zeige Fehlermeldung
        echo ERROR: Weder Git Bash noch WSL gefunden!
        echo Bitte installiere Git für Windows oder WSL, um das Shell-Skript auszuführen.
        pause
    )
)
