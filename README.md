# PAWAR CONSTRUCTIONS - Corporate Web Application

A modern, responsive, and performance-optimized corporate web portal for **PAWAR CONSTRUCTIONS**, engineered for general contracting, infrastructure, commercial, and residential developments.

![Pawar Constructions Banner](public/images/hero-bg.jpg)

---

## 🏗️ Overview

PAWAR CONSTRUCTIONS is built with high aesthetic standards, robust component architecture, full WCAG 2.1 AA accessibility, and search engine optimization.

### ✨ Features
- **Semantic Multi-Page Architecture**:
  - **Home**: Full-width cinematic hero, core trust pillars, about preview, services showcase, metrics, why choose us, landmark projects, and dual CTAs.
  - **About Us**: Company intro, 5-pillar mission statement, visionary roadmap, core corporate values, 4-step execution lifecycle, and configurable metrics.
  - **Our Services**: 8 specialized construction sectors (Residential, Commercial, Industrial, Civil, Renovation, Project Management, Interior Finishing, Site Development) and 6-stage lifecycle process.
  - **Our Projects**: Interactive portfolio featuring 10 landmark developments, multi-category filters, status chips (`Ongoing`/`Completed`), live keyword search, and dynamic project detail views (`/projects/:id`) with image galleries.
  - **Our Strengths**: 8 engineering capabilities, trust highlights, process timeline track, and technical assurance breakdown.
  - **Contact Us**: Comprehensive enquiry form with real-time validation, corporate coordinates, WhatsApp direct connect, and interactive map placeholder.
  - **404 Not Found**: Clean boundary fallback with navigation guidance.
- **SEO & Social Sharing**:
  - Dynamic meta titles and descriptions per route (`SEO.jsx`).
  - Open Graph & Twitter Cards.
  - Schema.org `ConstructionBusiness`, `AboutPage`, `Service`, `CollectionPage`, and `ContactPage` JSON-LD structured data.
  - Clean XML Sitemap (`/sitemap.xml`) and Crawler Directives (`/robots.txt`).
- **Accessibility & UX (WCAG 2.1 AA)**:
  - Visible focus rings (`:focus-visible`).
  - Keyboard skip-to-content link (`#main-content`).
  - Full form label associations, `aria-required`, and inline validation states.
  - Accessible mobile drawer with backdrop dismiss and scroll lock.
- **Performance**:
  - Preconnected Google Fonts with `display=swap`.
  - Lazy loading (`loading="lazy"`) and asynchronous decoding (`decoding="async"`) on below-the-fold media.
  - Fast bundle compilation with Vite 8.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + React Router 7
- **Bundler & Dev Server**: Vite 8
- **Icons**: Lucide React
- **Linter**: Oxlint
- **Styling**: Vanilla CSS Design System with custom tokens, fluid typography (`clamp()`), and responsive layouts (320px to 1440px)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ampventures7-dev/Pawar-Constructions.git

# Navigate into project directory
cd Pawar-Constructions

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # Custom vector hardhat brand insignia
│   ├── robots.txt           # Crawler instructions
│   ├── sitemap.xml          # XML sitemap
│   └── images/              # High-resolution architectural photography
├── src/
│   ├── components/
│   │   ├── cards/           # ServiceCard, ProjectCard, StrengthCard
│   │   ├── common/          # Navbar, Footer, PageHero, SEO, CTAButton
│   │   ├── forms/           # ContactForm with validation
│   │   ├── sections/        # HeroSection, StatsSection
│   │   └── Layout.jsx       # Global application frame with skip link
│   ├── data/
│   │   └── companyData.js   # Centralized data store & editable placeholders
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailsPage.jsx
│   │   ├── StrengthsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   ├── design-system.css # CSS variables, resets, typography, tokens
│   │   └── components.css   # Component styles & mobile responsive media queries
│   ├── App.jsx              # Application router
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Base stylesheet
├── index.html               # HTML5 template with preconnects & JSON-LD
├── package.json
└── vite.config.js
```

---

## 📄 License & Attribution

Designed and developed for **PAWAR CONSTRUCTIONS**.
All rights reserved.
