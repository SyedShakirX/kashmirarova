@echo off
echo ========================================================
echo   Kashmir Arova - Launching Local Development Server
echo   Website: kashmirarova.com
echo ========================================================
echo.

if not exist node_modules (
  echo [1/2] Installing dependencies, please wait a moment...
  call npm install
)

echo [2/2] Starting server on http://localhost:3000 ...
start http://localhost:3000
call npm run dev
pause
