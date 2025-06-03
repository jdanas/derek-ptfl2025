#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
pnpm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages
    echo "🌐 Deploying to GitHub Pages..."
    pnpm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🔗 Your site will be available at: https://jdanas.github.io/derek-ptfl2025/"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
