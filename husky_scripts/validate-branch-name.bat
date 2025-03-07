@echo off
setlocal enabledelayedexpansion

:: Get the current branch name
for /f %%i in ('git rev-parse --abbrev-ref HEAD') do set BRANCH_NAME=%%i

:: Define allowed branch name patterns
set FEATURE_REGEX=feature/
set BUGFIX_REGEX=bugfix/
set HOTFIX_REGEX=hotfix/
set RELEASE_REGEX=release/
set MAIN_DEVELOP_REGEX=main develop

:: Check if the branch name follows any of the patterns
if not "!BRANCH_NAME!"=="main" if not "!BRANCH_NAME!"=="develop" if not "!BRANCH_NAME:~0,8!"=="feature/" if not "!BRANCH_NAME:~0,7!"=="bugfix/" if not "!BRANCH_NAME:~0,7!"=="hotfix/" if not "!BRANCH_NAME:~0,8!"=="release/" (
    echo ❌ ERROR: Invalid branch name '!BRANCH_NAME!'.
    echo 🔹 Use one of the following formats:
    echo    - feature/{short-description} (e.g., feature/user-profile)
    echo    - bugfix/{short-description} (e.g., bugfix/login-issue)
    echo    - hotfix/{short-description} (e.g., hotfix/critical-bug)
    echo    - release/{version} (e.g., release/1.2.0)
    echo    - main or develop
    exit /b 1
)

echo ✅ Branch name is valid: !BRANCH_NAME!
exit /b 0
