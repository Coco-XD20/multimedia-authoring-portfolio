<<<<<<< HEAD
# multimedia-authoring-portfolio
=======
# Multimedia & Authoring Portfolio

A modern, professional portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing multimedia projects, 3D artwork, rotoscoping work, and more. This website is fully compatible with GitHub Pages deployment.

## Features

✨ **Modern Design**
- Space-inspired aesthetic with gradient effects
- Professional dark theme with vibrant accents
- Clean, organized layout

🎨 **Interactive Elements**
- Smooth scroll animations
- Fade-in effects on page load
- Scroll-triggered animations
- Hover effects on cards and navigation
- Parallax effects on hero sections
- Mobile-responsive hamburger menu
- Smooth anchor link scrolling

📱 **Responsive Design**
- Fully responsive on all device sizes
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface

⚡ **Performance**
- No dependencies or build process required
- Fast loading times
- Optimized CSS and JavaScript
- Works great on GitHub Pages

## Project Structure

```
multimedia-authoring-portfolio/
├── index.html                    # About page (home)
├── rotoscope.html               # Rotoscoping projects
├── solar-system.html            # Solar system renders
├── portfolio.html               # 3D portfolio
├── css/
│   └── style.css               # All styling and animations
├── js/
│   └── script.js               # All interactive functionality
├── assets/
│   ├── images/                 # Place your images here
│   └── videos/                 # Place your videos here
└── README.md                    # This file
```

## Pages Overview

### 1. About Page (index.html)
- Hero section with gradient title
- Introduction section
- Featured projects overview
- Skills & tools grid
- Contact placeholder

### 2. Rotoscope Page (rotoscope.html)
- Project gallery (6 items)
- Video demonstrations section
- Technical details/process section
- Frame-by-frame animation showcase

### 3. Solar System Page (solar-system.html)
- 8 planet cards with information
- Complete solar system 3D render placeholder
- Rendering gallery (6 items)
- Rendering techniques breakdown

### 4. 3D Portfolio Page (portfolio.html)
- Featured works section (3 items)
- Complete gallery grid (9 items)
- Tools & technologies grid
- Creative process timeline

## Getting Started

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/multimedia-authoring-portfolio.git
   cd multimedia-authoring-portfolio
   ```

2. **Open in a browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended)

3. **Using a Local Server (Recommended)**
   
   **Option A: Python**
   ```bash
   # Python 3.x
   python -m http.server 8000
   
   # Python 2.x
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Node.js (http-server)**
   ```bash
   npm install -g http-server
   http-server
   ```
   
   **Option C: VS Code Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

4. **View in browser**
   - Navigate to `http://localhost:8000` (or the port shown)

## Adding Your Content

### Images

1. Place your images in the `assets/images/` folder
2. Replace placeholder sections with your content
3. Update the image paths in HTML:

```html
<!-- Replace this: -->
<div class="placeholder-image">🎨 Your Image Here</div>

<!-- With this: -->
<img src="assets/images/your-image.jpg" alt="Description">
```

### Videos

1. Place your videos in the `assets/videos/` folder
2. Update the video placeholders in HTML:

```html
<!-- Replace this: -->
<div class="placeholder-video">▶️ Video</div>

<!-- With this: -->
<video width="100%" controls>
    <source src="assets/videos/your-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### Text Content

Edit the HTML files directly to update:
- Project titles and descriptions
- About section text
- Skills and tools
- Page content

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in with your account (`Coco-XD20`)
3. Click the **+** icon in the top right → **New repository**
4. Name it: `multimedia-authoring-portfolio` or `username.github.io`
5. Description: "Multimedia and Authoring Portfolio"
6. Choose **Public**
7. Click **Create repository**

### Step 2: Upload Your Files

#### Option A: Using Git (Recommended)

1. **Install Git** (if not already installed)
   - Download from [git-scm.com](https://git-scm.com)

2. **Open terminal/command prompt** in your project folder

3. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Multimedia portfolio website"
   ```

4. **Add remote repository**
   ```bash
   git remote add origin https://github.com/Coco-XD20/multimedia-authoring-portfolio.git
   ```

5. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

#### Option B: Upload Files via GitHub Web Interface

1. Go to your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop your project files
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. GitHub will generate your site URL: `https://Coco-XD20.github.io/multimedia-authoring-portfolio/`

### Step 4: View Your Site

- Wait 1-2 minutes for GitHub to build your site
- Visit: `https://Coco-XD20.github.io/multimedia-authoring-portfolio/`
- Your portfolio is now live!

## Repository URL Considerations

### Option 1: Project Repository (Recommended for portfolios)
- Repository name: `multimedia-authoring-portfolio`
- Website URL: `https://Coco-XD20.github.io/multimedia-authoring-portfolio/`
- Note: All links should work correctly as-is

### Option 2: User Site Repository
- Repository name: `Coco-XD20.github.io`
- Website URL: `https://Coco-XD20.github.io/`
- Note: Update the base path in the code if needed

## Updating Your Site

### Making Changes Locally

1. Edit your HTML/CSS/JavaScript files
2. Test locally in your browser
3. Push changes to GitHub:

```bash
git add .
git commit -m "Update: Add new project images"
git push origin main
```

### Changes Go Live

- GitHub Pages will automatically rebuild your site
- Changes usually appear within 1-2 minutes
- Refresh your browser to see updates

## Customization Guide

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00d9ff;      /* Cyan */
    --secondary-color: #9d4edd;    /* Purple */
    --accent-color: #ff006e;       /* Pink */
    --dark-bg: #0a0e27;            /* Dark blue */
    --darker-bg: #050812;          /* Darker blue */
    --light-text: #f8f9fa;         /* Off-white */
    --muted-text: #a0aec0;         /* Gray */
}
```

### Adjust Animations

- Open `css/style.css`
- Find animation sections (marked with comments)
- Modify duration, delay, or animation properties

### Modify Navigation

- Edit `<nav>` section in HTML files
- Update links in the `<ul class="nav-menu">`

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support
- IE 11: Limited support (no Intersection Observer animations)

## Performance Tips

1. **Optimize Images**
   - Use appropriate formats (JPEG for photos, PNG for graphics)
   - Compress images before uploading
   - Recommended tool: TinyPNG or ImageOptim

2. **Video Optimization**
   - Use MP4 format for best compatibility
   - Consider adding a thumbnail poster
   - Keep file sizes reasonable

3. **Lazy Loading**
   - Consider implementing lazy loading for images
   - Useful for faster initial page load

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Alt text placeholders for images

To further improve SEO:
1. Add alt text to all images
2. Write descriptive project descriptions
3. Create a sitemap (optional)
4. Add social media meta tags

## Accessibility

The website follows accessibility best practices:
- Semantic HTML5 elements
- Color contrast compliant
- Keyboard navigation support
- ARIA labels where needed
- Reduced motion support

## Troubleshooting

### Site not appearing on GitHub Pages
- Check Settings → Pages is configured correctly
- Ensure branch is `main`
- Wait 1-2 minutes for initial build
- Check for any build errors in Settings → Pages

### Links not working
- Verify file names match exactly (case-sensitive)
- Ensure all `.html` extensions are included in href
- Test locally before pushing to GitHub

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in CSS and HTML
- Verify all files are committed to GitHub

### Mobile menu not working
- Check JavaScript is enabled in browser
- Verify `js/script.js` is loaded correctly
- Check browser console for errors (F12)

## Development Improvements

### Adding a Build Process (Optional)
For advanced users wanting minification:
- Use tools like Webpack, Vite, or Parcel
- Optimize CSS and JavaScript
- Combine files for faster loading

### Version Control Tips
- Make regular commits with descriptive messages
- Use branches for major updates
- Create a `develop` branch for testing

## File Size Optimization

Current approximate sizes:
- `index.html`: ~8 KB
- `style.css`: ~30 KB
- `script.js`: ~15 KB
- Total: ~53 KB (without images/videos)

## License

This portfolio template is open source and free to use for personal projects.

## Support & Questions

For issues or questions:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation: https://pages.github.com/
3. Check file paths and URLs carefully
4. Test in multiple browsers

## Next Steps

1. ✅ Upload all files to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Get your live URL
4. 📝 Add your project images and content
5. 🎨 Customize colors and content
6. 📱 Test on mobile devices
7. 🔍 Optimize images and videos
8. 🚀 Share your portfolio!

## Future Enhancements

Consider adding:
- Contact form (using Formspree or similar service)
- Image lightbox/gallery
- Search functionality
- Blog section
- Newsletter signup
- Dark/light mode toggle
- Multi-language support

---

**Happy Portfolio Building! 🚀**

For updates and more features, check back regularly. Make sure to keep your fork or clone up-to-date with any improvements.

**Portfolio Created:** 2026-06-20
**Last Updated:** 2026-06-20
>>>>>>> 8e3a1a9 (Initial commit: Multimedia & Authoring portfolio)
