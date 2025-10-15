// Sample project data - Replace with your actual projects
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
        image: "🛒",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.com"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
        image: "📋",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.com"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application that provides real-time weather information, forecasts, and interactive maps.",
        image: "🌤️",
        tags: ["JavaScript", "API Integration", "CSS3"],
        github: "https://github.com/yourusername/project3",
        demo: "https://project3-demo.com"
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website template with smooth animations and interactive elements.",
        image: "💼",
        tags: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/yourusername/project4",
        demo: "https://project4-demo.com"
    },
    {
        title: "Machine Learning Model",
        description: "A machine learning project for image classification with a web interface for real-time predictions.",
        image: "🤖",
        tags: ["Python", "TensorFlow", "Flask", "Docker"],
        github: "https://github.com/yourusername/project5",
        demo: null
    },
    {
        title: "Social Media Dashboard",
        description: "An analytics dashboard for social media metrics with data visualization and reporting features.",
        image: "📊",
        tags: ["React", "D3.js", "Express", "PostgreSQL"],
        github: "https://github.com/yourusername/project6",
        demo: "https://project6-demo.com"
    }
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const image = document.createElement('div');
    image.className = 'project-image';
    image.textContent = project.image;
    
    const content = document.createElement('div');
    content.className = 'project-content';
    
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    
    const tags = document.createElement('div');
    tags.className = 'project-tags';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tags.appendChild(tagElement);
    });
    
    const links = document.createElement('div');
    links.className = 'project-links';
    
    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.className = 'project-link';
        githubLink.textContent = 'View Code →';
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        links.appendChild(githubLink);
    }
    
    if (project.demo) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demo;
        demoLink.className = 'project-link';
        demoLink.textContent = 'Live Demo →';
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        links.appendChild(demoLink);
    }
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tags);
    content.appendChild(links);
    
    card.appendChild(image);
    card.appendChild(content);
    
    return card;
}

// Helper function to reset hamburger animation
function resetHamburgerAnimation(hamburger) {
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// Helper function to activate hamburger animation
function activateHamburgerAnimation(hamburger) {
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    
    // Load projects only if the grid element exists
    if (projectsGrid) {
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Only set up menu if elements exist
    if (!hamburger || !navMenu) {
        return;
    }
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        if (navMenu.classList.contains('active')) {
            activateHamburgerAnimation(hamburger);
        } else {
            resetHamburgerAnimation(hamburger);
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            resetHamburgerAnimation(hamburger);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Adjust for fixed header
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
