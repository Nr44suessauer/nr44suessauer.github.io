#!/bin/bash

# Navigate to nuxt-app directory
cd nuxt-app

# Run npm generate
echo "Building the site..."
npm run generate

# Copy files from .output/public to parent directory
echo "Copying generated files to parent directory..."
cp -rf .output/public/* ..

# Navigate back to parent directory
cd ..

# Add all changes to git
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Update website content"

# Push to origin main
echo "Pushing to origin main..."
git push origin main

echo "Deployment completed successfully!"