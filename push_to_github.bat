@echo off
echo ========================================================
echo   JPL Season 6 - Pushing Application to GitHub
echo   Repository: https://github.com/Ritikjain1407/JPL-AUCTION-LIST.git
echo ========================================================
cd /d "%~dp0"
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Code pushed to GitHub successfully!
) else (
    echo [NOTE] If prompted above, please complete sign-in in your browser.
)
echo.
pause
