@echo off
echo ==========================================================
echo     Starte den Nuxt-Entwicklungsserver
echo ==========================================================
echo.
echo Port-Bereinigung wird durchgeführt...

REM Alle Prozesse auf Ports 3000-3009 beenden
for /L %%p in (3000,1,3009) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') do (
        echo   Prozess mit PID %%a auf Port %%p gefunden. Wird beendet...
        taskkill /F /PID %%a >nul 2>&1
    )
)

echo Alte Server wurden beendet.
echo.
echo Starte Nuxt-Server...

cd /d "%~dp0"
npm run dev

pause
