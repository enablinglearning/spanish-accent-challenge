# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. **Repository name**: `spanish-accent-challenge`
3. **Description**: `Interactive educational game for practicing Spanish accent marks (tildes)`
4. **Visibility**: Select **Private** ✅
5. **DO NOT** check any of these:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use one of the methods below:

### Method A: Using the Setup Script (Easiest)

```bash
./setup-github.sh <your-github-username>
```

Replace `<your-github-username>` with your actual GitHub username.

### Method B: Manual Setup

If you prefer to do it manually, run these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/spanish-accent-challenge.git

# Push your code to GitHub
git push -u origin main
```

### Method C: Using SSH (if you have SSH keys set up)

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin git@github.com:YOUR_USERNAME/spanish-accent-challenge.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/spanish-accent-challenge`
2. You should see all your files there
3. The repository should be marked as **Private**

## Troubleshooting

### If you get authentication errors:

- **HTTPS**: You may need to use a Personal Access Token instead of your password
  - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate a new token with `repo` permissions
  - Use the token as your password when pushing

### If the repository already exists:

If you already created the repository with a README, you'll need to pull first:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Repository Details

- **Name**: `spanish-accent-challenge`
- **Visibility**: Private
- **Description**: Interactive educational game for practicing Spanish accent marks (tildes)
- **Main branch**: `main`

