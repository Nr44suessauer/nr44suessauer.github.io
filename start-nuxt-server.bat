@echo off
REM ====================================================
REM Nuxt.js Development Server Starter
REM Startet den Server von überall in der Ordnerstruktur
REM ====================================================

REM Prüfen ob das Script in einer neuen Konsole gestartet werden muss
if "%1" neq "CONSOLE" (
    start "Nuxt.js Development Server" cmd /k "%~f0" CONSOLE
    exit /b
)

echo.
echo [92m========================================[0m
echo [92m   Nuxt.js Development Server Starter   [0m
echo [92m========================================[0m
echo.

REM Aktuelles Verzeichnis speichern
set "ORIGINAL_DIR=%CD%"

REM Basis-Pfad des Projekts ermitteln (wo diese .bat liegt)
set "SCRIPT_DIR=%~dp0"
set "PROJECT_ROOT=%SCRIPT_DIR%"

echo [93mProjekt-Root:[0m %PROJECT_ROOT%
echo [93mAktuelles Verzeichnis:[0m %ORIGINAL_DIR%
echo.

REM Zum Projekt-Root wechseln
cd /d "%PROJECT_ROOT%"

REM Prüfen ob nuxt-app Ordner existiert
if not exist "nuxt-app" (
    echo [91mFEHLER: nuxt-app Ordner nicht gefunden![0m
    echo [91mBitte stellen Sie sicher, dass diese .bat im Projekt-Root liegt.[0m
    echo.
    pause
    exit /b 1
)

REM Prüfen ob Node.js verfügbar ist
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [91mFEHLER: Node.js ist nicht installiert oder nicht im PATH![0m
    echo [91mBitte installieren Sie Node.js von https://nodejs.org[0m
    echo.
    pause
    exit /b 1
)

REM Prüfen ob npm verfügbar ist
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [91mFEHLER: npm ist nicht verfügbar![0m
    echo.
    pause
    exit /b 1
)

echo [92mStarte Nuxt.js Entwicklungsserver...[0m
echo.

REM In nuxt-app Verzeichnis wechseln
cd nuxt-app

REM Prüfen ob package.json existiert
if not exist "package.json" (
    echo [91mFEHLER: package.json nicht gefunden in nuxt-app/![0m
    echo.
    pause
    exit /b 1
)

REM Cache bereinigen (übersprungen wegen möglichen Problemen)
echo [93mÜberspringe Cache-Bereinigung...[0m

REM Abhängigkeiten prüfen (falls node_modules fehlt)
if not exist "node_modules" (
    echo [93mInstalliere Abhängigkeiten...[0m
    npm install
)

echo.
echo [92mStarte Entwicklungsserver...[0m

REM Lokale IP-Adresse ermitteln
echo [93mErmittle lokale IP-Adresse...[0m
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /i "IPv4" ^| findstr /v "127.0.0.1"') do (
    set "LOCAL_IP=%%i"
    goto :found_ip
)
:found_ip
set "LOCAL_IP=%LOCAL_IP: =%"

echo.
echo [92m========================================[0m
echo [92m   SERVER INFORMATIONEN                 [0m
echo [92m========================================[0m
echo [96mLokal:           http://localhost:3000/[0m
echo [96mNetzwerk IP:     http://%LOCAL_IP%:3000/[0m
echo [96mZum Beenden:     Ctrl+C druecken[0m
echo [92m========================================[0m
echo.
echo [93mStarte Server - bitte warten...[0m
echo.

REM Development Server starten
call npm run dev

REM Falls der Server beendet wird, zum ursprünglichen Verzeichnis zurück
cd /d "%ORIGINAL_DIR%"

echo.
echo [93mServer wurde beendet.[0m
echo [93mDrücken Sie eine beliebige Taste zum Schließen...[0m
pause
