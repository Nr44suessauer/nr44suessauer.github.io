# PowerShell script for starting Nuxt development server
# Usage: .\scripts\npmrundev.ps1

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting Nuxt development server..." -ForegroundColor Green

# Get the project root directory (parent of scripts/)
$PROJECT_ROOT = Split-Path -Parent $PSScriptRoot
Write-Host "📁 Project root: $PROJECT_ROOT" -ForegroundColor Yellow

# Navigate to nuxt-app directory
$NUXT_APP_DIR = Join-Path $PROJECT_ROOT "nuxt-app"
Set-Location $NUXT_APP_DIR

# Check if package manager files exist and determine which to use
$PACKAGE_MANAGER = "npm"
if (Test-Path "pnpm-lock.yaml") {
    $PACKAGE_MANAGER = "pnpm"
} elseif (Test-Path "package-lock.json") {
    $PACKAGE_MANAGER = "npm"
} elseif (Test-Path "yarn.lock") {
    $PACKAGE_MANAGER = "yarn"
}

Write-Host "📦 Using package manager: $PACKAGE_MANAGER" -ForegroundColor Cyan

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
    switch ($PACKAGE_MANAGER) {
        "pnpm" { & pnpm install }
        "yarn" { & yarn install }
        default { & npm install }
    }
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
}

# Clean up any previous dev artifacts
Write-Host "🧹 Cleaning up previous dev artifacts..." -ForegroundColor Yellow
$artifacts = @(".nuxt", ".output", "dist", ".turbo")
foreach ($artifact in $artifacts) {
    if (Test-Path $artifact) {
        Remove-Item -Recurse -Force $artifact
    }
}

# Start the development server
Write-Host "🌐 Starting development server on http://localhost:3000" -ForegroundColor Green
switch ($PACKAGE_MANAGER) {
    "pnpm" { & pnpm run dev }
    "yarn" { & yarn dev }
    default { & npm run dev }
}
