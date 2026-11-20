# Upload the project to GitHub (Windows)

1. Create a new empty repository on GitHub.
2. Extract this ZIP. Open a terminal in the extracted `Placement-Skill-Monitoring-Management-System` folder.
3. Check that `.env` files are not present. `.gitignore` excludes them.
4. Run:

```bash
git init
git add .
git commit -m "Complete placement skill monitoring management system"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git says `remote origin already exists`, run:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the sample URL with your real GitHub repository URL. Put that URL on the assignment front page. Never commit MongoDB credentials.
