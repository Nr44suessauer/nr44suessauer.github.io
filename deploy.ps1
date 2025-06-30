# PowerShell-Version des deploy.sh Scripts
# deploy.ps1

Write-Host "Starte Deployment..." -ForegroundColor Green

# Navigate to nuxt-app directory
Write-Host "Wechsle zu nuxt-app Verzeichnis..." -ForegroundColor Yellow
Set-Location nuxt-app

# Run npm generate
Write-Host "Building the site..." -ForegroundColor Yellow
npm run generate

# Copy files from .output/public to parent directory
Write-Host "Copying generated files to parent directory..." -ForegroundColor Yellow
Copy-Item -Path ".output\public\*" -Destination ".." -Recurse -Force

# Navigate back to parent directory
Write-Host "Wechsle zurück zum Hauptverzeichnis..." -ForegroundColor Yellow
Set-Location ..

# Add all changes to git
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update website content - rebuild static files"

# Push to origin main
Write-Host "Pushing to origin main..." -ForegroundColor Yellow
git push origin main

Write-Host "Deployment completed successfully!" -ForegroundColor Green
