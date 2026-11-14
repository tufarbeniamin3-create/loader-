@echo off
title Building TextureLoader.exe
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Opening download page...
  start https://nodejs.org
  pause
  exit /b
)
call npm install
call npm run build
echo.
echo Done! Your .exe is in the "dist" folder.
start "" dist
pause
