@echo off
REM ====================================================
REM Nuxt.js Development Server Starter
REM Startet den Server von überall in der Ordnerstruktur
REM ====================================================

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

REM Cache bereinigen
echo [93mBereinige Nuxt Cache...[0m
npx nuxi cleanup

REM Abhängigkeiten prüfen (falls node_modules fehlt)
if not exist "node_modules" (
    echo [93mInstalliere Abhängigkeiten...[0m
    npm install
)

echo.
echo [92mStarte Entwicklungsserver...[0m
echo [96mServer wird verfügbar sein unter: http://localhost:3000/[0m
echo [96mZum Beenden: Ctrl+C drücken[0m
echo.

REM Development Server starten
npm run dev

REM Falls der Server beendet wird, zum ursprünglichen Verzeichnis zurück
cd /d "%ORIGINAL_DIR%"

echo.
echo [93mServer wurde beendet.[0m
pause
