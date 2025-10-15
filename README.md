# My-Projects - Portfolio Showcase Template

A modern, responsive portfolio template designed to showcase your projects to employers and clients. This template features a clean design, smooth animations, and easy customization.

## Features

✨ **Modern Design** - Clean, professional layout with contemporary styling  
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
🎨 **Easy Customization** - Simple structure makes it easy to personalize  
⚡ **Fast Loading** - Lightweight and optimized for performance  
🎯 **Project Showcase** - Dedicated section to highlight your best work  
💼 **Professional Sections** - About, Skills, Projects, and Contact sections  
🔄 **Smooth Animations** - Engaging scroll animations and transitions  

## Quick Start

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/xio0x/My-Projects.git
   cd My-Projects
   ```

2. **Open `index.html` in your browser**
   - Simply double-click the `index.html` file, or
   - Use a local development server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Customize the content** (see instructions below)

## Customization Guide

### 1. Personal Information

**In `index.html`**, update the following sections:

#### Hero Section (Lines 25-40)
```html
<h2 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h2>
<p class="hero-subtitle">Full Stack Developer | Software Engineer</p>
<p class="hero-description">
    Your personal description here...
</p>
```

#### About Section (Lines 45-60)
Update the paragraphs with your background and experience.

#### Contact Section (Lines 110-130)
```html
<a href="mailto:your.email@example.com" class="contact-link">
<a href="https://github.com/yourusername" class="contact-link">
<a href="https://linkedin.com/in/yourusername" class="contact-link">
```

### 2. Skills

**In `index.html`** (Lines 65-95), modify the skill lists to match your expertise:
```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul class="skill-list">
        <li>Your Skill Here</li>
        <!-- Add more skills -->
    </ul>
</div>
```

### 3. Projects

**In `script.js`** (Lines 1-45), update the `projects` array with your actual projects:

```javascript
const projects = [
    {
        title: "Your Project Name",
        description: "Project description...",
        image: "🚀", // Use an emoji or later replace with image URL
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project",
        demo: "https://your-project-demo.com" // or null if no demo
    },
    // Add more projects...
];
```

### 4. Colors and Styling

**In `styles.css`** (Lines 8-16), customize the color scheme:

```css
:root {
    --primary-color: #3b82f6;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    /* ... */
}
```

### 5. Adding Project Images

To use actual images instead of emojis:

1. Create an `images` folder in your project root
2. Add your project screenshots/images
3. In `script.js`, update the image property:
   ```javascript
   image: "images/project1.jpg"  // instead of emoji
   ```
4. Update the `createProjectCard` function to use `<img>` tags

## File Structure

```
My-Projects/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── LICENSE             # MIT License
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select your branch (usually `main`) and root folder
4. Click "Save"
5. Your site will be available at `https://yourusername.github.io/My-Projects/`

### Netlify
1. Drag and drop your project folder to [Netlify](https://www.netlify.com/)
2. Your site will be deployed instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Tips for Employers

When showcasing to employers:
- ✅ Include 4-6 of your best projects
- ✅ Write clear, concise project descriptions
- ✅ Include live demos whenever possible
- ✅ Link to GitHub repositories with good README files
- ✅ Highlight technologies and skills used
- ✅ Keep your contact information up to date
- ✅ Use professional language and check for typos

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork this project and customize it for your needs. If you create an interesting variation or improvement, consider sharing it!

## Credits

Created as a template for developers to showcase their work to potential employers.

---

**Need help?** Open an issue or reach out through the contact information you've added to your portfolio!