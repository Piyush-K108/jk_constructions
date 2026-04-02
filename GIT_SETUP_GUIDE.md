# 🔐 Git Credentials Setup Guide - JK Construction Project

## Problem
You want to use different Git credentials for this project only, without affecting your global Git settings.

## Solution

### ✅ Method 1: Quick Manual Setup (Recommended)

Run these commands in your project folder:

```bash
# 1. Configure user for THIS PROJECT ONLY
git config --local user.name "YourGitHubUsername"
git config --local user.email "your.email@example.com"

# 2. Remove old remote connection
git remote remove origin

# 3. Add YOUR new repository
git remote add origin https://github.com/YOUR_USERNAME/jk_constructions.git

# 4. Set credential helper (for Windows)
git config --local credential.helper manager-core
```

Replace:
- `YourGitHubUsername` with your actual GitHub username
- `your.email@example.com` with your email
- `YOUR_USERNAME` with your GitHub username

### ✅ Method 2: Use Automated Script

**Windows Users:**
```bash
# Double-click or run:
setup-git.bat
```

**Linux/Mac Users:**
```bash
# Make executable and run:
chmod +x setup-git.sh
./setup-git.sh
```

### ✅ Method 3: Create New Repository First

1. **Go to GitHub and create new repository:**
   - Visit: https://github.com/new
   - Repository name: `jk-construction` (or any name)
   - Make it **Public** or **Private**
   - **DON'T** initialize with README (we already have one)
   - Click "Create repository"

2. **Copy the repository URL**
   ```
   Example: https://github.com/your-username/jk-construction.git
   ```

3. **Configure and Push:**
   ```bash
   # Set local credentials
   git config --local user.name "YourName"
   git config --local user.email "your.email@example.com"

   # Connect to your new repo
   git remote remove origin
   git remote add origin https://github.com/your-username/jk-construction.git

   # Add all changes
   git add .

   # Commit
   git commit -m "Initial commit - JK Construction website ready for deployment"

   # Push to GitHub
   git push -u origin main
   ```

## 🔑 Using Personal Access Token (More Secure)

GitHub requires Personal Access Tokens instead of passwords.

### Create Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Copy the token (you'll only see it once!)

### Use Token in URL:
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/jk_constructions.git
```

Or Git will ask for it when you push (use token as password).

## 📋 Verification Commands

Check your local configuration:
```bash
# View all local config (only this project)
git config --local --list

# Check username
git config --local user.name

# Check email
git config --local user.email

# Check remote URL
git remote -v
```

## 🎯 Current Status of Your Project

Files modified and ready to commit:
- ✅ README.md (updated with deployment info)
- ✅ package-lock.json (dependencies installed)
- ✅ src/pages/About/index.jsx (completed)
- ✅ src/pages/Contact/index.jsx (completed)
- ✅ src/pages/Projects/index.jsx (completed)

New files to add:
- ✅ DEPLOYMENT.md
- ✅ vercel.json
- ✅ .claude/ folder (optional - can ignore)

## 📤 Complete Push Workflow

```bash
# 1. Configure credentials (local only)
git config --local user.name "YourUsername"
git config --local user.email "your.email@example.com"

# 2. Update remote (use YOUR repository)
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/jk-construction.git

# 3. Add files (excluding .claude folder)
git add .

# 4. Commit changes
git commit -m "Complete website - ready for Vercel deployment

- Added comprehensive About page
- Completed Contact page with form
- Built Projects gallery with filters
- Added Vercel configuration
- Updated documentation
"

# 5. Push to GitHub
git push -u origin main
```

## 🚫 Exclude Certain Files

The `.gitignore` file already excludes:
- ✅ node_modules/
- ✅ dist/
- ✅ *.log files
- ✅ .vscode/ (except extensions.json)

Add `.claude/` to .gitignore if needed:
```bash
echo ".claude/" >> .gitignore
```

## 🆘 Troubleshooting

### "Authentication failed"
- Use Personal Access Token instead of password
- Check token has `repo` permissions

### "Permission denied"
- Make sure you're the owner of the repository
- Check your GitHub username is correct

### "Remote already exists"
- Run: `git remote remove origin` first

### Push rejected
```bash
# If remote has changes you don't have:
git pull origin main --rebase
git push -u origin main
```

### Want to start fresh?
```bash
# Remove git history
rm -rf .git

# Reinitialize
git init
git config --local user.name "YourName"
git config --local user.email "your.email@example.com"
git remote add origin https://github.com/YOUR_USERNAME/jk-construction.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## 🔐 Security Notes

- ✅ Local config only affects this folder
- ✅ Your global Git settings remain unchanged
- ✅ Never commit `.env` files with secrets
- ✅ Use Personal Access Tokens, not passwords
- ✅ Keep your tokens secret!

## ✅ After Successful Push

Once pushed to GitHub:

1. **Deploy to Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Click Deploy!

2. **Your site will be live in minutes!** 🎉

## 📞 Need Help?

If you get stuck:
1. Check GitHub's documentation: https://docs.github.com/
2. Verify your credentials: `git config --local --list`
3. Check remote: `git remote -v`

---

**Remember:** These settings only apply to this `jk_constructions` folder. Your other projects are unaffected! 🎯
