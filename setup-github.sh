#!/bin/bash

# Script to connect local repository to GitHub and push
# Usage: ./setup-github.sh <your-github-username>

if [ -z "$1" ]; then
    echo "Usage: ./setup-github.sh <your-github-username>"
    echo "Example: ./setup-github.sh ljhernand"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="spanish-accent-challenge"

echo "Setting up GitHub repository connection..."
echo "Repository: $GITHUB_USERNAME/$REPO_NAME"

# Add remote origin
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Your repository is now on GitHub."
echo "Visit: https://github.com/$GITHUB_USERNAME/$REPO_NAME"

