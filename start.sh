#!/usr/bin/env bash
echo "========================================================"
echo "  Kashmir Arova - Launching Local Server"
echo "  Website: kashmirarova.com"
echo "========================================================"
echo ""

if [ ! -d "node_modules" ]; then
  echo "[1/2] Installing dependencies..."
  npm install
fi

echo "[2/2] Starting server at http://localhost:3000 ..."
if which xdg-open > /dev/null; then
  xdg-open http://localhost:3000 &
elif which open > /dev/null; then
  open http://localhost:3000 &
fi

npm run dev
