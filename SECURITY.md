# Security Policy

## 🔒 Securing Your Arcana Mystica Installation

### API Keys and Sensitive Data

**IMPORTANT**: Never commit API keys, credentials, or sensitive configuration files to Git.

#### What Was Fixed

1. ✅ Removed `firebase-config.json` with exposed API key
2. ✅ Updated `.gitignore` to prevent future leaks
3. ✅ Added `.env.example` template

### 🔑 Setting Up Your API Keys

#### Step 1: Create Your Local Environment File

```bash
cp .env.example .env.local
```

#### Step 2: Add Your Gemini API Key

Edit `.env.local` and add your key:

```env
VITE_GEMINI_API_KEY=AIzaSy...
```

**Get a free Gemini API key**: [Google AI Studio](https://aistudio.google.com/app/apikey)

### ⚠️ About Firebase API Keys

The Firebase Web API key **is not a secret**. It's designed to be included in frontend code. However:

1. **Do protect it with Firebase Security Rules**
2. **Do restrict it in Google Cloud Console** to your domains
3. **Don't commit** it directly in config files (use environment variables instead)

More info: [Firebase Security Best Practices](https://firebase.google.com/docs/projects/api-keys)

### 🛡️ What to Do If Your API Key Was Exposed

#### For Gemini API Keys:

1. **Immediately regenerate** your API key at [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Delete the old key
3. Update your GitHub secret `VITE_GEMINI_API_KEY`
4. Update your local `.env.local`

#### For Firebase API Keys:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Find your API key and click "Edit"
4. Under "Application restrictions", select "HTTP referrers"
5. Add only your production domain (e.g., `https://hongpenggg.github.io/*`)
6. Under "API restrictions", restrict to only the APIs you use

### 📝 GitHub Secrets (for Actions)

Your repository uses GitHub Actions to deploy. API keys should be stored as **GitHub Secrets**:

1. Go to your repository Settings
2. Navigate to "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Name: `VITE_GEMINI_API_KEY`
5. Value: Your API key
6. Click "Add secret"

The GitHub Actions workflow (`.github/workflows/deploy.yml`) already uses this secret.

### 🚨 If You Need to Remove Sensitive Data from Git History

If you accidentally committed sensitive data, you need to remove it from Git history:

#### Option 1: Use BFG Repo-Cleaner (Recommended)

```bash
# Install BFG
brew install bfg  # macOS
# or download from: https://rtyley.github.io/bfg-repo-cleaner/

# Clone a fresh copy
git clone --mirror https://github.com/hongpenggg/arcana.git

# Remove the file from history
bfg --delete-files firebase-config.json arcana.git

# Clean up
cd arcana.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (WARNING: destructive)
git push --force
```

#### Option 2: Use git filter-branch

```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch firebase-config.json" \
  --prune-empty --tag-name-filter cat -- --all

git push origin --force --all
```

**Note**: Both methods rewrite Git history and will break anyone else's local copies.

### 💾 Current .gitignore Protection

The repository now ignores:

- ✅ `.env*` files (all environment variables)
- ✅ `firebase-config.json`
- ✅ `node_modules/`
- ✅ `dist/` (build artifacts)
- ✅ IDE config files (`.vscode/`, `.idea/`)
- ✅ System files (`.DS_Store`, `Thumbs.db`)

### ✅ Checklist for New Contributors

Before committing:

- [ ] Never commit `.env*` files
- [ ] Never commit API keys or passwords
- [ ] Never commit `node_modules/`
- [ ] Never commit build artifacts (`dist/`, `build/`)
- [ ] Always use environment variables for secrets
- [ ] Review your commit with `git diff` before pushing

### 📞 Reporting Security Issues

If you discover a security vulnerability, please email the maintainer directly instead of opening a public issue.

---

**Last Updated**: February 2026
