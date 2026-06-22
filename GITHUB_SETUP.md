# GitHub Setup — Skotjänst

## Prerequisites

- Git installed
- GitHub account

## Step 1 — First Commit (local)

```powershell
cd C:\Jarvis\projects\business-2-skotjanst
git add -A
git commit -m "Initial commit: Skotjänst static site ready for Vercel"
```

## Step 2 — Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `business-2-skotjanst` (or `skotjanst-uppsala`)
3. **Visibility:** Private or Public
4. **Do NOT** initialize with README
5. Click **Create repository**

## Step 3 — Push to GitHub

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/business-2-skotjanst.git
git push -u origin main
```

## Step 4 — Verify

Confirm source files are on GitHub and build artifacts are ignored.
