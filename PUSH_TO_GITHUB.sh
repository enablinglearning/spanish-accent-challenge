#!/bin/bash

# Script to push Spanish Accent Challenge to GitHub
# This repository is INDEPENDENT and ready to be pushed

echo "=========================================="
echo "Spanish Accent Challenge - GitHub Push"
echo "=========================================="
echo ""
echo "This script will help you push your game to GitHub."
echo "Repository Status: INDEPENDENT (no remote connections)"
echo ""

# Check if GitHub username is provided
if [ -z "$1" ]; then
    echo "Usage: ./PUSH_TO_GITHUB.sh <your-github-username>"
    echo ""
    echo "Steps:"
    echo "1. First, create a PRIVATE repository on GitHub:"
    echo "   - Go to: https://github.com/new"
    echo "   - Name: spanish-accent-challenge"
    echo "   - Description: Interactive educational game for practicing Spanish accent marks (tildes)"
    echo "   - Set to PRIVATE"
    echo "   - DO NOT initialize with README, .gitignore, or license"
    echo "   - Click 'Create repository'"
    echo ""
    echo "2. Then run this script with your GitHub username:"
    echo "   ./PUSH_TO_GITHUB.sh YOUR_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="spanish-accent-challenge"

echo "GitHub Username: $GITHUB_USERNAME"
echo "Repository Name: $REPO_NAME"
echo ""

# Verify repository is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  WARNING: You have uncommitted changes!"
    echo "Please commit all changes before pushing."
    git status
    exit 1
fi

# Verify no remote exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists. Checking..."
    CURRENT_REMOTE=$(git remote get-url origin)
    echo "Current remote: $CURRENT_REMOTE"
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote set-url origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    else
        echo "Keeping existing remote."
    fi
else
    echo "✓ Adding remote repository..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi

echo ""
echo "✓ Verifying remote..."
git remote -v

echo ""
echo "=========================================="
echo "Ready to push!"
echo "=========================================="
echo ""
echo "Branch: main"
echo "Commits to push: $(git log --oneline | wc -l | tr -d ' ')"
echo ""
read -p "Push to GitHub now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "=========================================="
        echo "✅ Successfully pushed to GitHub!"
        echo "=========================================="
        echo ""
        echo "Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
        echo ""
        echo "Your game is now on GitHub as an INDEPENDENT repository!"
    else
        echo ""
        echo "=========================================="
        echo "❌ Push failed!"
        echo "=========================================="
        echo ""
        echo "Possible issues:"
        echo "1. Repository doesn't exist on GitHub - create it first"
        echo "2. Authentication required - you may need to use a personal access token"
        echo "3. Check your internet connection"
        echo ""
        echo "If authentication is required, you can:"
        echo "- Use GitHub CLI: gh auth login"
        echo "- Use a personal access token as your password"
        echo "- Set up SSH keys for authentication"
    fi
else
    echo "Push canceled. Repository is ready when you are!"
fi

