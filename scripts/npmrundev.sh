#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting Nuxt development server..."

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
