# Latila Consulting - Modern Business Website

A pixel-perfect, responsive website for Latila Consulting built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with pixel-perfect accuracy
- **Responsive**: Fully responsive design that works on all devices
- **Component-Based**: Modular React components for easy maintenance
- **Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Optimized for search engines

## 🏗️ Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header with logo
│   │   └── Footer.tsx          # Footer with social links
│   └── sections/
│       ├── HeroSection.tsx     # Main hero section
│       ├── AboutSection.tsx    # About us section
│       ├── WhyChooseUsSection.tsx # Why choose us features
│       ├── ServicesSection.tsx # Services showcase
│       ├── BlogSection.tsx     # Blog posts preview
│       ├── FAQSection.tsx      # FAQ accordion
│       └── ContactSection.tsx  # Contact form
├── hooks/
│   ├── useScrollToTop.ts       # Scroll to top utility
│   └── useIntersectionObserver.ts # Intersection observer hook
├── utils/
│   └── constants.ts            # App constants and configuration
├── globals.css                 # Global styles and Tailwind
├── layout.tsx                  # Root layout component
└── page.tsx                    # Home page
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Package Manager**: Bun
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd latila
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Run the development server:

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Sections Overview

### Header

- Responsive navigation menu
- Company logo with branding
- Contact CTA button
- Mobile hamburger menu

### Hero Section

- Compelling headline and tagline
- Clear value proposition
- Call-to-action button
- Professional imagery placeholder

### About Section

- Company story and mission
- Founded in 2018
- Digital transformation focus
- Brand logo display

### Why Choose Us

- 5 key value propositions:
  - Holistic Approach
  - Security at the Core
  - Client-Centric Partnership
  - Expertise Across Regions
  - Adaptability

### Services

- 5 core service offerings:
  - Cloud Advisory & Migration
  - Cybersecurity & Compliance
  - Enterprise Application Modernization
  - IT Consulting & Project Management
  - Management Services

### Blog & Resources

- 3 featured blog posts
- Productivity-focused content
- Read more links

### FAQ Section

- Interactive accordion
- Common questions and answers
- Expandable content

### Contact Section

- Contact form with validation
- Professional imagery
- Multiple contact fields

### Footer

- Company branding
- Quick navigation links
- Social media links
- Copyright information

## 🎨 Design System

### Colors

- **Primary Blue**: #00447D
- **Dark Blue**: #003366
- **Light Blue**: #E6F2FF
- **Lighter Blue**: #CCE6FF
- **Gray**: #6B7280
- **Dark Gray**: #1F2937

### Typography

- **Headings**: Bold, dark blue/gray
- **Body**: Regular weight, gray
- **Links**: Blue with hover states

### Spacing

- Consistent 4px base unit
- Responsive spacing with Tailwind classes

## 🔧 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## 📦 Dependencies

### Core

- `next`: 15.5.2
- `react`: 19.1.0
- `react-dom`: 19.1.0

### Styling

- `tailwindcss`: 4.1.13
- `postcss`: 8.5.6

### Development

- `typescript`: 5.x
- `eslint`: 9.x
- `@types/node`: 20.x
- `@types/react`: 19.x

## 🌐 Deployment

The project is ready for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📄 License

This project is proprietary to Latila Consulting.

## 🤝 Contributing

For internal development and contributions, please follow the established coding standards and component structure.

## 📞 Support

For technical support or questions, contact the development team.
