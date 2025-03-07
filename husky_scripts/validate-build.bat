@echo off
setlocal enabledelayedexpansion

echo 🚀 Running npm build before pushing...

:: Run npm build
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Push aborted.
    exit /b 1
)

echo ✅ Build succeeded! Proceeding with push...
exit /b 0
