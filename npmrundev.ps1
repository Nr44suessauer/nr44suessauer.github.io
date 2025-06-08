# PowerShell-Script für Windows
# npmrundev.ps1

Write-Host "Starte Nuxt.js Entwicklungsserver..." -ForegroundColor Green

# Wechsle in das nuxt-app Verzeichnis
Set-Location nuxt-app

# Bereinige Nuxt Cache
Write-Host "Bereinige Nuxt Cache..." -ForegroundColor Yellow
npx nuxi cleanup

# Starte Entwicklungsserver
Write-Host "Starte Entwicklungsserver..." -ForegroundColor Yellow
npm run dev
