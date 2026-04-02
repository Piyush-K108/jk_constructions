@echo off
echo ================================================
echo Clearing GitHub Credentials from Windows
echo ================================================
echo.

echo Removing old GitHub credentials...
cmdkey /delete:LegacyGeneric:target=git:https://github.com 2>nul
cmdkey /delete:LegacyGeneric:target=github.com 2>nul
cmdkey /delete:git:https://github.com 2>nul

echo.
echo ✅ Old credentials cleared!
echo.
echo Now try pushing again. Git will ask for your credentials.
echo Use your GitHub Personal Access Token as the password.
echo.
echo Next: Run this command:
echo    git push -u origin main
echo.
pause
