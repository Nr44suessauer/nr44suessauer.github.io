@echo off
echo ==========================================================
echo     NUXT DEVELOPMENT SERVER STARTER
echo ==========================================================
echo.
echo [1/3] Stopping any existing servers on ports 3000-3009...

REM Kill any processes using ports 3000-3009
for /L %%p in (3000,1,3009) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') do (
        echo Found process with PID %%a using port %%p. Terminating...
        taskkill /F /PID %%a 2>nul
    )
)

echo [2/3] All conflicting servers stopped.
echo.
echo [3/3] Starting Nuxt development server...
echo.

cd %~dp0
if exist pnpm-lock.yaml (
    echo Using pnpm package manager
    pnpm run dev
) else if exist package-lock.json (
    echo Using npm package manager
    npm run dev
) else if exist yarn.lock (
    echo Using yarn package manager
    yarn dev
) else (
    echo Using default npm package manager
    npm run dev
)
