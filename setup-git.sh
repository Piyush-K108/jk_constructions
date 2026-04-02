#!/bin/bash

# Git Configuration Script for JK Construction Project
# This sets up Git credentials ONLY for this project folder

echo "==================================="
echo "Git Configuration Setup"
echo "==================================="
echo ""

# Get user input
read -p "Enter your GitHub username: " username
read -p "Enter your email: " email
read -p "Enter your repository URL (e.g., github.com/username/repo.git): " repo_url

echo ""
echo "Configuring Git for this project only..."
echo ""

# Set local Git config (only for this folder)
git config --local user.name "$username"
git config --local user.email "$email"

# Update remote URL
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$repo_url"

# Configure credential helper
git config --local credential.helper manager-core

echo "✅ Git configured successfully!"
echo ""
echo "Your configuration:"
echo "  Username: $(git config --local user.name)"
echo "  Email: $(git config --local user.email)"
echo "  Remote: $(git config --local remote.origin.url)"
echo ""
echo "Next steps:"
echo "  1. Create a new repository on GitHub"
echo "  2. Run: git add ."
echo "  3. Run: git commit -m 'Initial commit - JK Construction website'"
echo "  4. Run: git push -u origin main"
echo ""
