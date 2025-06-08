#!/bin/bash

# =============================================================================
# Nuxt.js Projekt - Installations- und Setup-Script
# =============================================================================
# Dieses Script installiert alle notwendigen Dependencies und startet das Projekt
# Kompatibel mit Windows (Git Bash/WSL), macOS und Linux
#
# Verwendung:
#   chmod +x installdependencies.sh
#   ./installdependencies.sh
# =============================================================================

set -e  # Script bei Fehlern beenden

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging-Funktionen
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Header
echo "======================================================================="
echo "  Nuxt.js Projekt - Automatische Installation und Setup"
echo "======================================================================="
echo ""

# 1. Node.js Version prüfen
log_info "Überprüfe Node.js Installation..."
if ! command -v node &> /dev/null; then
    log_error "Node.js ist nicht installiert!"
    echo "Bitte installiere Node.js von https://nodejs.org/"
    echo "Empfohlene Version: LTS (18 oder höher)"
    exit 1
fi

NODE_VERSION=$(node --version)
log_success "Node.js gefunden: $NODE_VERSION"

# 2. npm Version prüfen
if ! command -v npm &> /dev/null; then
    log_error "npm ist nicht installiert!"
    exit 1
fi

NPM_VERSION=$(npm --version)
log_success "npm gefunden: v$NPM_VERSION"

# 3. PowerShell Execution Policy für Windows setzen (falls im Git Bash/WSL)
if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    log_info "Windows erkannt - setze PowerShell Execution Policy..."
    powershell.exe -Command "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force" 2>/dev/null || log_warning "Konnte PowerShell Execution Policy nicht setzen"
fi

# 4. In das nuxt-app Verzeichnis wechseln
log_info "Wechsle in das nuxt-app Verzeichnis..."
if [ ! -d "nuxt-app" ]; then
    log_error "Verzeichnis 'nuxt-app' nicht gefunden!"
    echo "Stelle sicher, dass du das Script aus dem Hauptverzeichnis des Projekts ausführst."
    exit 1
fi

cd nuxt-app

# 5. Vorhandene node_modules und Lock-Files löschen (Clean Install)
log_info "Bereinige vorhandene Installationen..."
if [ -d "node_modules" ]; then
    log_info "Lösche node_modules..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    log_info "Lösche package-lock.json..."
    rm -f package-lock.json
fi

if [ -f "pnpm-lock.yaml" ]; then
    log_info "Lösche pnpm-lock.yaml..."
    rm -f pnpm-lock.yaml
fi

# 6. Nuxt Cache bereinigen (falls nuxi bereits installiert ist)
log_info "Bereinige Nuxt Cache..."
if command -v npx &> /dev/null; then
    npx nuxi cleanup 2>/dev/null || log_warning "Nuxt Cache konnte nicht bereinigt werden (normal bei erster Installation)"
fi

# 7. Haupt-Dependencies installieren
log_info "Installiere Haupt-Dependencies..."
npm install --no-audit --no-fund

# 8. Fehlende Dependencies installieren
log_info "Installiere fehlende Pinegrow-Module..."
npm install @pinegrow/nuxt-module --save-dev --no-audit --no-fund

# 9. Überprüfe kritische Dependencies
log_info "Überprüfe kritische Dependencies..."
REQUIRED_DEPS=("nuxt" "@nuxt-themes/alpine" "@pinegrow/nuxt-module")

for dep in "${REQUIRED_DEPS[@]}"; do
    if npm list "$dep" &> /dev/null; then
        log_success "$dep ist installiert"
    else
        log_warning "$dep fehlt - versuche erneute Installation..."
        npm install "$dep" --no-audit --no-fund
    fi
done

# 10. Sicherheitslücken beheben (optional)
log_info "Überprüfe Sicherheitslücken..."
npm audit fix --no-audit --no-fund 2>/dev/null || log_warning "Einige Sicherheitslücken konnten nicht automatisch behoben werden"

# 11. Nuxt Cache erneut bereinigen
log_info "Bereinige Nuxt Cache nach Installation..."
npx nuxi cleanup

# 12. Projekt validieren
log_info "Validiere Projekt-Konfiguration..."
if [ ! -f "nuxt.config.ts" ]; then
    log_error "nuxt.config.ts nicht gefunden!"
    exit 1
fi

if [ ! -f "package.json" ]; then
    log_error "package.json nicht gefunden!"
    exit 1
fi

# 13. Erfolgreiche Installation bestätigen
echo ""
echo "======================================================================="
log_success "Installation erfolgreich abgeschlossen!"
echo "======================================================================="
echo ""

# 14. Nächste Schritte anzeigen
echo "Nächste Schritte:"
echo ""
echo "1. Entwicklungsserver starten:"
echo "   cd nuxt-app"
echo "   npm run dev"
echo ""
echo "2. Oder verwende das bereitgestellte Script:"
echo "   ./npmrundev.sh"
echo ""
echo "3. Website öffnen:"
echo "   http://localhost:3000"
echo ""

# 15. Optional: Automatisch den Dev-Server starten
read -p "Möchtest du den Entwicklungsserver jetzt starten? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log_info "Starte Entwicklungsserver..."
    npm run dev
else
    log_info "Du kannst den Server später mit 'npm run dev' starten"
fi

echo ""
log_success "Setup abgeschlossen! Viel Spaß beim Entwickeln! 🚀"
