#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting deployment process..."

# Get the project root directory (parent of scripts/)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
echo "📁 Project root: $PROJECT_ROOT"

# Navigate to project root
cd "$PROJECT_ROOT"

# Clean up any previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf .nuxt .output dist .turbo .vercel

# Navigate to nuxt-app directory
cd nuxt-app

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

# Install dependencies
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

# Build the site
echo "🔨 Building the site..."
case $PACKAGE_MANAGER in
    "pnpm")
        pnpm run generate
        ;;
    "yarn")
        yarn generate
        ;;
    *)
        npm run generate
        ;;
esac

# Check if build was successful
if [ ! -d ".output/public" ]; then
    echo "❌ Build failed: .output/public directory not found"
    exit 1
fi

# Copy files from .output/public to parent directory
echo "📋 Copying generated files to parent directory..."
cp -rf .output/public/* ..

# Navigate back to parent directory
cd ..

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please initialize git first."
    exit 1
fi

# Check git status
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️ No changes to commit"
    exit 0
fi

# Add all changes to git
echo "📝 Adding files to git..."
git add .

# Get current timestamp for commit message
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy website - $TIMESTAMP"

# Push to origin main
echo "🚢 Pushing to origin main..."
git push origin main

echo "✅ Deployment completed successfully!"
echo "🌐 Your website has been deployed!"