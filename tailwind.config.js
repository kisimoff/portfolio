/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#ff1a75',
        'f-text-color': 'white',
        'close-window-hover': 'rgba(210, 46, 46, 0.423)',
      },
      spacing: {
        'padding': 'clamp(0.2rem, 1.4vw + 0.4rem, 2.5rem)',
        'padding-projects-text': 'clamp(0.3rem, 0.6vw + 0.3rem, 1.6rem)',
        'padding-small': 'clamp(0.35rem, 0.3vw + 0.12rem, 1.5rem)',
        'padding-micro': 'clamp(0.2rem, 0.15vw + 0.05rem, 1rem)',
      },
      fontSize: {
        'fs-navbar': 'clamp(1.3rem, 0.7vw + 1.4rem, 2rem)',
        'fs-instructions': 'clamp(1.2rem, 0.6vh + 1.3rem, 2rem)',
        'fs-heading': 'clamp(1.2rem, 1.2vw + 1.2rem, 3.5rem)',
        'fs-text': 'clamp(0.8rem, 0.4vw + 0.75rem, 1.1em)',
        'fs-text-projects': 'clamp(0.8rem, 0.3vw + 0.7rem, 1.6rem)',
        'fs-bigger-text-mobile': 'clamp(0.84rem, 0.4vw + 0.7rem, 2rem)',
        'fs-text-mobile': 'clamp(0.5rem, 2.5vw + 0.18rem, 1.1rem)',
        'fs-window-title': 'clamp(1rem, 0.25vw + 0.9rem, 1.8rem)',
        'fs-project-title': 'clamp(1rem, 0.95vw + 0.3rem, 1.4rem)',
        'fs-icon-task': 'clamp(1rem, 2vw + 1rem, 2rem)',
        'fs-icon-task-caption': 'clamp(0.8rem, 0.3vw + 1rem, 2rem)',
        'fs-icon-caption': 'clamp(0.6rem, 0.1vw + 0.8rem, 1.5rem)',
      },
      boxShadow: {
        'window-shadow': 'rgba(126, 126, 126, 0) 0px 0px 2px 1px',
      },
      width: {
        'project-width': 'clamp(23.23rem, 50vmin, 44vw)',
        'project-width-mobile': 'clamp(80vmin, 90vw, 550px)',
        'projects-field-width': 'calc(var(--project-width) * 2 + var(--padding))',
        'projects-field-width-mobile': 'calc(var(--project-width-mobile))',
      },
      height: {
        'projects-height': 'clamp(12rem, 60vmin, 65vh)',
        'projects-height-mobile': 'clamp(20rem, 90vmin, 65vh)',
      },
      minWidth: {
        'sz-logo-nav': 'clamp(2.5rem, 1.7vw + 2rem, 3rem)',
        'sz-icon-social': 'clamp(1.8rem, 1.4vw + 1rem, 2.5rem)',
        'bottom-row-icon-size': 'clamp(1.5rem, 1vw + 0.9rem, 2.5rem)',
        'bottom-row-icon-size-mobile': 'clamp(1.8rem, 1.1vw + 1rem, 3rem)',
        'SlSocialLinkedin': 'clamp(2.5rem, 1.7vw + 2rem, 3.5rem)',
      },
    },
  },
  plugins: [],
}

