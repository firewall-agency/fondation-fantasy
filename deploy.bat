@echo off
title Deploiement Fondation Fanta Sy
echo.
echo ====================================
echo  Deploiement Fondation Fanta Sy
echo ====================================
echo.
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
call npm run deploy
echo.
echo (Appuyez sur une touche pour fermer)
pause >nul
