# Customization Guide

## 🎨 How to Customize Your Portfolio

### Table of Contents
1. [Colors & Theme](#colors--theme)
2. [Adding Project Cards](#adding-project-cards)
3. [Adding Gallery Items](#adding-gallery-items)
4. [Updating Navigation](#updating-navigation)
5. [Modifying Animations](#modifying-animations)
6. [Adding Videos](#adding-videos)
7. [Custom Fonts](#custom-fonts)

---

## Colors & Theme

All colors are defined in CSS variables at the top of `css/style.css`:

```css
:root {
    --primary-color: #00d9ff;      /* Main cyan color */
    --secondary-color: #9d4edd;    /* Purple accent */
    --accent-color: #ff006e;       /* Pink/magenta accent */
    --dark-bg: #0a0e27;            /* Main background */
    --darker-bg: #050812;          /* Darker background */
    --light-text: #f8f9fa;         /* Light text */
    --muted-text: #a0aec0;         /* Muted gray text */
    --card-bg: #1a1f3a;            /* Card backgrounds */
    --border-color: #2d3561;       /* Border colors */
}
```

### Change Color Scheme Example
To change to a different color theme, edit the `:root` section:

```css
:root {
    --primary-color: #00ff88;      /* Change to green */
    --secondary-color: #ff00ff;    /* Change to magenta */
    --accent-color: #ffff00;       /* Change to yellow */
    /* ... rest of colors ... */
}
```

### Add a Light Theme
```css
@media (prefers-color-scheme: light) {
    :root {
        --primary-color: #0066cc;
        --dark-bg: #ffffff;
        --light-text: #000000;
        /* ... etc ... */
    }
}
```

---

## Adding Project Cards

### Project Card Template (About Page)

```html
<article class="project-card">
    <div class="project-card-image">
        <img src="assets/images/project-name.jpg" alt="Project Name">
        <!-- Or use placeholder: -->
        <!-- <div class="placeholder-image">📱 Your Project</div> -->
    </div>
    <div class="project-card-content">
        <h3>Project Title</h3>
        <p>Brief description of the project and what it showcases.</p>
        <a href="portfolio.html" class="card-link">View Project →</a>
    </div>
</article>
```

### Location
Find in: `index.html` → `projects-grid` section

### Steps
1. Copy the template above
2. Update the image src and alt text
3. Change the title and description
4. Update the link href
5. Paste into the projects-grid container
6. Save and test

---

## Adding Gallery Items

### Gallery Item Template (Rotoscope Page)

```html
<div class="gallery-item">
    <div class="gallery-image">
        <img src="assets/images/gallery-item.jpg" alt="Gallery Item Title">
        <!-- Or use placeholder: -->
        <!-- <div class="placeholder-image">🎬 Project</div> -->
    </div>
    <h3>Gallery Item Title</h3>
    <p>Description of this gallery item</p>
</div>
```

### Location
Find in: `rotoscope.html` → `gallery-grid` section

### Steps
1. Copy the template above
2. Replace the image path
3. Update the title and description
4. Paste into the gallery-grid container
5. Save and test

### For Planet Cards (Solar System Page)

```html
<div class="planet-card">
    <div class="planet-image">
        <img src="assets/images/planet-name.jpg" alt="Planet Name">
    </div>
    <div class="planet-info">
        <h3>Planet Name</h3>
        <p>Description of the planet or render.</p>
        <span class="planet-fact">Your fact here</span>
    </div>
</div>
```

### For Featured Projects (3D Portfolio Page)

```html
<article class="featured-card">
    <div class="featured-image">
        <img src="assets/images/featured-project.jpg" alt="Project Name">
    </div>
    <div class="featured-content">
        <h3>Project Title</h3>
        <p class="project-category">Category • Tools Used</p>
        <p>Detailed description of the project.</p>
        <div class="project-tags">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
            <span class="tag">Tag 3</span>
        </div>
    </div>
</article>
```

---

## Updating Navigation

### Adding a New Navigation Link

Find in: All HTML files → `<nav>` section

```html
<ul class="nav-menu">
    <li><a href="index.html" class="nav-link">About</a></li>
    <li><a href="rotoscope.html" class="nav-link">Rotoscope</a></li>
    <li><a href="solar-system.html" class="nav-link">Solar System</a></li>
    <li><a href="portfolio.html" class="nav-link">3D Portfolio</a></li>
    <!-- Add new link here: -->
    <li><a href="new-page.html" class="nav-link">New Page</a></li>
</ul>
```

### Creating a New Page
1. Create `new-page.html`
2. Copy the content structure from `index.html`
3. Update the page title and content
4. Add the navigation link to all HTML files
5. Test all links

---

## Modifying Animations

### Animation Timing

Find in: `css/style.css`

```css
/* Increase animation duration */
.fade-in {
    animation: fadeIn 1s ease-out forwards;  /* Changed from 0.6s to 1s */
}

/* Decrease animation duration */
.slide-up {
    animation: slideUp 0.3s ease-out forwards;  /* Changed from 0.6s to 0.3s */
}
```

### Disable All Animations

In `css/style.css`, modify the media query:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
    }
}
```

### Create New Animation

```css
/* Add new animation keyframes */
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply to element */
.my-element {
    animation: slideDown 0.6s ease-out;
}
```

---

## Adding Videos

### Basic Video Embed

Replace placeholders with:

```html
<video width="100%" height="auto" controls>
    <source src="assets/videos/my-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### Video with Poster/Thumbnail

```html
<video width="100%" height="auto" controls poster="assets/images/poster.jpg">
    <source src="assets/videos/my-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### Responsive Video Container

```html
<div class="video-container" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;">
    <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls>
        <source src="assets/videos/my-video.mp4" type="video/mp4">
    </video>
</div>
```

### Embed YouTube Video

```html
<div class="video-container" style="position: relative; width: 100%; padding-bottom: 56.25%;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
            src="https://www.youtube.com/embed/VIDEO_ID" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

---

## Custom Fonts

### Add Google Fonts

In the `<head>` of HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then in `css/style.css`:

```css
body {
    font-family: 'Poppins', 'Segoe UI', sans-serif;
}
```

### Common Font Combinations

**Modern & Clean**
```css
font-family: 'Inter', 'Segoe UI', sans-serif;
```

**Professional & Bold**
```css
font-family: 'Playfair Display', serif;
```

**Technical & Modern**
```css
font-family: 'JetBrains Mono', monospace;
```

---

## Useful Tips & Tricks

### Hide an Element Temporarily
```css
.element-to-hide {
    display: none;
}
```

### Make Text Responsive
```css
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* minimum, preferred, maximum */
}
```

### Add Image Hover Effect
```css
img {
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.05);
}
```

### Create a Background Gradient
```css
.gradient-bg {
    background: linear-gradient(135deg, #00d9ff, #9d4edd, #ff006e);
}
```

### Center Content
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---

## Common Modifications Checklist

- [ ] Changed colors to match your brand
- [ ] Updated all project titles and descriptions
- [ ] Added your images to assets folder
- [ ] Updated navigation links
- [ ] Changed font (optional)
- [ ] Adjusted animation speeds (optional)
- [ ] Added videos (if needed)
- [ ] Tested on mobile device
- [ ] Updated meta descriptions
- [ ] Added Google Analytics (optional)

---

## Need More Help?

- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **HTML Elements:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- **Web Fonts:** https://fonts.google.com
- **Color Picker:** https://htmlcolorcodes.com
- **Image Optimization:** https://tinypng.com

---

**Happy Customizing! 🎨**
