# Portfolio Site

Welcome to my personal portfolio site!  
This project is built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and supports internationalization (i18n).

## Version History

### v1.0 - Initial Release

- Basic portfolio structure
- Responsive design for dark and light mode
- Core sections: About, Skills, Work, Contact
- English-only content

### v2.0 - Enchanted Responsivness

- Enhanced mobile responsiveness
- Enhanced responsiveness for smaller and medium screens
- Fixed visual bugs

### v2.1 - Major Visual and Style Improvements

- Improved accessibility features
- Added hover tooltips for skills
- Optimized images and animations
- Better SEO optimization
- Modern styling updates

### v3.0 - Internationalization <---(Current Version)

- Implemented language toggle
- Added Macedonian language support
- Dynamic translations using react-i18next
- Enhanced error handling
- Performance improvements
- Enhanced UI/UX for language switching
- Updated README.md file with latest changes

## Features

- **Responsive Design**

  - Mobile-first approach
  - Dark mode support
  - Smooth animations
  - Modern UI components

- **Internationalization**

  - English/Macedonian language support
  - Seamless language switching
  - Persistent language preference
  - Fully translated content

- **Core Sections**
  - About section with professional background
  - Skills grid with detailed tooltips
  - Work experience and project showcase
  - Contact form with validation

## Tech Stack

- **Frontend**: Next.js 14, React 19
- **Styling**: Tailwind CSS
- **i18n**: react-i18next
- **Animations**: CSS/Tailwind
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**

   ```sh
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    components/     # React components
    i18n/          # i18n configuration
    styles/        # Global styles
public/
  images/         # Static images
  locales/        # Translation files
    en/           # English translations
    mk/           # Macedonian translations
```

## Customization

- Update your skills and project info in [`src/app/components/Skills.js`](src/app/components/Skills.js) and [`src/app/components/Work.js`](src/app/components/Work.js).
- Add or replace images in [`public/images/`](public/images/).
- Update your CV in [`public/files/`](public/files/).

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or any platform that supports Next.js.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**v1.0** – master branch
**v2.0** – master branch
**v2.1** – master branch
**v3.0** – master branch

Built and maintained by Stefan Mitrevski
