#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🚀 Running npm build before pushing..."

# Run npm build
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Push aborted."
    exit 1
fi

echo "✅ Build succeeded! Proceeding with push..."
exit 0
