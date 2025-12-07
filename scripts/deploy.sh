#!/bin/bash

# Deploy script untuk askPhysio
# Usage: ./scripts/deploy.sh "commit message"

# Cek apakah commit message disediakan
if [ -z "$1" ]; then
    echo "❌ Error: Commit message tidak ditemukan!"
    echo "Usage: ./scripts/deploy.sh \"your commit message\""
    exit 1
fi

COMMIT_MESSAGE="$1"

echo "🚀 Memulai proses deployment..."
echo ""

# Step 1: Build menggunakan composer
echo "📦 Menjalankan composer run setup..."
composer run setup

if [ $? -ne 0 ]; then
    echo "❌ Composer setup gagal!"
    exit 1
fi

echo "✅ Composer setup berhasil!"
echo ""

# Step 2: Git add
echo "📝 Menambahkan perubahan ke git..."
git add .

if [ $? -ne 0 ]; then
    echo "❌ Git add gagal!"
    exit 1
fi

echo "✅ Git add berhasil!"
echo ""

# Step 3: Git commit
echo "💾 Melakukan commit dengan message: \"$COMMIT_MESSAGE\""
git commit -m "$COMMIT_MESSAGE"

if [ $? -ne 0 ]; then
    echo "❌ Git commit gagal!"
    exit 1
fi

echo "✅ Git commit berhasil!"
echo ""

# Step 4: Git push
echo "🚀 Melakukan push ke remote repository..."
git push

if [ $? -ne 0 ]; then
    echo "❌ Git push gagal!"
    exit 1
fi

echo "✅ Git push berhasil!"
echo ""
echo "🎉 Deployment selesai!"
