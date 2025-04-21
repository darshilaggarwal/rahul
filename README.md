# Creative Designer & Content Creator Portfolio

A fully responsive and visually appealing portfolio website built with HTML, CSS, and JavaScript, showcasing design and content creation skills.

## Features

- **Clean Navigation Bar**: With smooth scrolling to each section
- **Dark/Light Mode Toggle**: Fully functional theme switcher with local storage persistence
- **Hero Section**: Featuring a professional image, introduction text, and headline
- **About Me Section**: Including a bio and photo with hover animations
- **Skills Section**: Using custom SVG icons for design tools and content creation skills
- **Hackathon Contributions**: Showcasing specific skills for hackathon participation
- **Contact Form**: Styled form with fields for name, email, subject, and message
- **Modern UI Elements**: Custom fonts, gradients, and subtle animations
- **Fully Responsive**: Mobile-first design using flexbox and grid layouts
- **Interactive Elements**: Including scroll-to-top button, hover effects, and animated navbar

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox/Grid, and Dark Mode)
- JavaScript (ES6+)
- SVG Icons
- Font Awesome for icons
- Google Fonts (Poppins, Montserrat)

## Usage

1. Clone or download this repository
2. Open the `index.html` file in your browser
3. To customize:
   - Replace placeholder images in the `images` folder
   - Update text content in `index.html`
   - Modify colors and styles in `css/styles.css`

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in the `styles.css` file for both light and dark themes:

```css
/* Light Theme Colors */
:root {
    --primary-color: #5e72e4;
    --primary-dark: #4757b2;
    --secondary-color: #11cdef;
    /* Other variables */
}

/* Dark Theme Colors */
.dark-theme {
    --primary-color: #6c63ff;
    --primary-dark: #5a52d5;
    --secondary-color: #00bfff;
    /* Other variables */
}
```

### Personal Information

Update your personal information in the following sections of the `index.html` file:

- Hero section - Your name and headline
- About section - Your bio and details
- Skills section - Your design and content creation skills
- Hackathon section - Your hackathon contributions
- Contact section - Your contact details

## Responsive Design

The website is fully responsive and works well on:
- Mobile phones
- Tablets
- Desktops

## Dark Mode Functionality

The portfolio includes a fully functional dark mode toggle that:
- Persists user preference using localStorage
- Automatically detects system preference
- Provides smooth transitions between themes
- Customizes all UI elements for optimal visibility in both modes

## License

This project is open source and available for personal and commercial use. 