@echo off
REM Git Configuration Script for JK Construction Project (Windows)
REM This sets up Git credentials ONLY for this project folder

echo ===================================
echo Git Configuration Setup
echo ===================================
echo.

set /p username="Enter your GitHub username: "
set /p email="Enter your email: "
set /p repo="Enter your repository name (e.g., jk-construction): "

echo.
echo Configuring Git for this project only...
echo.

REM Set local Git config (only for this folder)
git config --local user.name "%username%"
git config --local user.email "%email%"

REM Update remote URL
git remote remove origin 2>nul
git remote add origin "https://github.com/%username%/%repo%.git"

REM Configure credential helper for Windows
git config --local credential.helper manager-core

echo.
echo ✅ Git configured successfully!
echo.
echo Your configuration:
git config --local user.name
git config --local user.email
git config --local remote.origin.url
echo.
echo Next steps:
echo   1. Create a new repository on GitHub: https://github.com/new
echo   2. Run: git add .
echo   3. Run: git commit -m "Initial commit - JK Construction website"
echo   4. Run: git push -u origin main
echo.
pause
