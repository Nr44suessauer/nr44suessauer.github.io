#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Nuxt development server..."

# Kill all processes running on ports 3000-3009
echo "🔍 Checking for existing servers on ports 3000-3009..."

# Function to kill processes using specific ports
kill_port_processes() {
    # Automatisch das richtige System erkennen
    if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ -n "$WINDIR" ]]; then
        # Windows mit Git Bash oder ähnlichem
        echo "⚙️ Windows-Umgebung erkannt, verwende PowerShell für Port-Bereinigung..."
        for port in $(seq 3000 3009); do
            echo "⚙️ Überprüfe Port $port..."
            # PowerShell-Befehl über Git Bash ausführen
            POWERSHELL_COMMAND="Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id \$_.OwningProcess -Force -ErrorAction SilentlyContinue }"
            powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$POWERSHELL_COMMAND" 2>/dev/null || true
        done
    else
        # Unix-basierte Systeme (Linux/Mac)
        echo "⚙️ Unix-Umgebung erkannt, verwende native Befehle für Port-Bereinigung..."
        for port in $(seq 3000 3009); do
            echo "⚙️ Überprüfe Port $port..."
            PORT_PID=$(lsof -ti:$port 2>/dev/null)
            if [ ! -z "$PORT_PID" ]; then
                echo "🛑 Prozess mit PID $PORT_PID auf Port $port gefunden. Wird beendet..."
                kill -9 $PORT_PID 2>/dev/null || true
                echo "✅ Prozess beendet"
            fi
        done
    fi
    echo "✅ Port-Bereinigung abgeschlossen"
}

# Port-Bereinigung ausführen
kill_port_processes

# Get the project root directory (parent of scripts/)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "📁 Project root: $PROJECT_ROOT"

# Navigate to nuxt-app directory
cd "$PROJECT_ROOT/nuxt-app"

# Check if package manager files exist and determine which to use
if [ -f "pnpm-lock.yaml" ]; then
    PACKAGE_MANAGER="pnpm"
elif [ -f "package-lock.json" ]; then
    PACKAGE_MANAGER="npm"
elif [ -f "yarn.lock" ]; then
    PACKAGE_MANAGER="yarn"
else
    PACKAGE_MANAGER="npm"
fi

echo "📦 Using package manager: $PACKAGE_MANAGER"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📥 Installing dependencies..."
    case $PACKAGE_MANAGER in
        "pnpm")
            pnpm install
            ;;
        "yarn")
            yarn install
            ;;
        *)
            npm install
            ;;
    esac
else
    echo "✅ Dependencies already installed"
fi

# Clean up any previous dev artifacts
echo "🧹 Cleaning up previous dev artifacts..."
rm -rf .nuxt .output dist .turbo

# Start the development server
echo "🌐 Starting development server on http://localhost:3000"
case $PACKAGE_MANAGER in
    "pnpm")
        pnpm run dev
        ;;
    "yarn")
        yarn dev
        ;;
    *)
        npm run dev
        ;;
esac
