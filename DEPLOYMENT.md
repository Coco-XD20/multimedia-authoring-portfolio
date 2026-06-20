# Quick Deployment Guide to GitHub Pages

## ⚡ Quick Start (5 Minutes)

### 1. Create GitHub Repository
```
1. Go to github.com → Click + → New repository
2. Name: multimedia-authoring-portfolio
3. Description: Multimedia and Authoring Portfolio
4. Make it PUBLIC
5. Click "Create repository"
```

### 2. Upload Files (Choose One)

**Option A: Using Git (Recommended)**
```bash
cd path/to/project
git init
git add .
git commit -m "Initial commit: Multimedia portfolio"
git remote add origin https://github.com/Coco-XD20/multimedia-authoring-portfolio.git
git branch -M main
git push -u origin main
```

**Option B: GitHub Web Upload**
```
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop all project files
4. Click "Commit changes"
```

### 3. Enable GitHub Pages
```
1. Go to Settings (top right)
2. Click "Pages" (left sidebar)
3. Select: Branch = main, Folder = / (root)
4. Click Save
```

### 4. View Your Site
```
Visit: https://Coco-XD20.github.io/multimedia-authoring-portfolio/
(Wait 1-2 minutes for initial build)
```

## 📝 Git Commands Reference

### Initial Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "jlpilar.dev@gmail.com"
```

### Updating Your Site
```bash
git add .
git commit -m "Update: Your message here"
git push origin main
```

### View Status
```bash
git status
git log
```

## 🔧 Local Testing

### Using Python
```bash
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Using Node.js
```bash
npm install -g http-server
http-server
```

### Using VS Code
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

## ✅ Deployment Checklist

- [ ] Created GitHub repository
- [ ] Added all files to repository
- [ ] GitHub Pages is enabled
- [ ] Visited your live URL
- [ ] Tested on mobile device
- [ ] Updated content (optional)
- [ ] Shared portfolio URL

## 🆘 Troubleshooting

**Site not showing?**
- Wait 1-2 minutes
- Check Settings → Pages configuration
- Clear browser cache (Ctrl+Shift+Delete)

**Files missing?**
- Verify all files are committed: `git status`
- Check file paths and URLs match exactly
- File names are case-sensitive

**Links not working?**
- Ensure all `.html` extensions are present
- Verify paths don't have typos
- Test locally first

## 📱 Testing Checklist

- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Tablet
- [ ] Mobile phone
- [ ] Mobile menu hamburger
- [ ] All navigation links
- [ ] Scroll animations
- [ ] Form fields (if added)

## 🎨 After Deployment

### Add Your Content
1. Add images to `assets/images/`
2. Add videos to `assets/videos/`
3. Edit HTML to replace placeholders
4. Commit and push changes

### Make Updates
```bash
# Edit files locally
# Test in browser
# Commit changes
git add .
git commit -m "Add new project images"
git push origin main
```

## 🚀 Next Steps

1. **Add Images**
   - Place in `assets/images/`
   - Update HTML with your images
   - Commit and push

2. **Customize Colors**
   - Edit `:root` variables in `css/style.css`
   - Commit and push

3. **Update Content**
   - Edit text in HTML files
   - Add project descriptions
   - Commit and push

4. **Monitor Performance**
   - Use Chrome DevTools (F12)
   - Check Lighthouse scores
   - Optimize images if needed

## 📚 Helpful Resources

- GitHub Pages Docs: https://pages.github.com/
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
- HTML Best Practices: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 💡 Pro Tips

1. **Use descriptive commit messages**
   ```bash
   git commit -m "Add solar system render gallery images"
   ```

2. **Create a develop branch for testing**
   ```bash
   git checkout -b develop
   # Make changes and test
   # When ready:
   git checkout main
   git merge develop
   git push origin main
   ```

3. **Add images in batches**
   - Optimize before uploading
   - Use consistent naming
   - Document in commit message

4. **Keep a changelog**
   - Track what you update
   - Include dates
   - Reference in commits

## 🎯 GitHub Username Reminder

Your GitHub username: **Coco-XD20**
Your email: **jlpilar.dev@gmail.com**

Repository URL:
```
https://github.com/Coco-XD20/multimedia-authoring-portfolio
```

Live Site URL:
```
https://Coco-XD20.github.io/multimedia-authoring-portfolio/
```

---

**You're all set! Push your portfolio to the world! 🌍**
