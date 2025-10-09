# 🚀 Latila Consulting - Professional Business Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, pixel-perfect, and fully responsive business website built with cutting-edge web technologies for Latila Consulting - Your partner in digital transformation.

[Live Demo](#) | [Documentation](#-documentation) | [Report Bug](https://github.com/sbscphp/latila/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections Overview](#-sections-overview)
- [Design System](#-design-system)
- [API Integration](#-api-integration)
- [Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 **Modern & Professional Design**
- Clean, pixel-perfect UI/UX design
- Professional business layout
- Consistent branding throughout

### 📱 **Fully Responsive**
- Mobile-first approach
- Tablet and desktop optimized
- Seamless experience across all devices

### ⚡ **Performance Optimized**
- Built with Next.js 15 App Router
- Server-side rendering (SSR)
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Turbopack for faster development builds

### 🎭 **Rich Animations**
- Smooth scroll animations with Framer Motion
- Fade-in effects (left, right, up)
- Scale-in animations
- Stagger container for sequential animations
- Intersection observer for scroll triggers

### 🔒 **Form Validation & Security**
- Comprehensive client-side validation
- Type-safe form handling
- Error handling with user-friendly messages
- Loading states and feedback
- Character count for text fields

### 🌐 **SEO Ready**
- Semantic HTML structure
- Meta tags optimization
- Sitemap support
- Open Graph tags

### ♿ **Accessibility**
- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels

### 🔄 **API Integration**
- Strapi CMS backend integration
- React Query for data fetching
- Axios for HTTP requests
- Loading skeletons for better UX
- Error handling and retry logic

---

## 🛠️ Tech Stack

### **Core Framework**
- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### **Styling**
- **[Tailwind CSS 4.1.13](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS 8.5.6](https://postcss.org/)** - CSS processor

### **Animations**
- **[Framer Motion 12.23.22](https://www.framer.com/motion/)** - Production-ready animation library

### **Data Fetching**
- **[TanStack React Query 5.90.2](https://tanstack.com/query/latest)** - Data fetching and caching
- **[Axios 1.12.2](https://axios-http.com/)** - HTTP client

### **UI Components**
- **[React Loading Skeleton 3.5.0](https://github.com/dvtng/react-loading-skeleton)** - Loading placeholders
- **[Sonner 2.0.7](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Lucide 0.544.0](https://lucide.dev/)** - Icon library

### **Development Tools**
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler

---

## 📁 Project Structure

```
latila/
├── app/
│   ├── components/
│   │   ├── animations/           # Reusable animation components
│   │   │   ├── FadeInLeft.tsx    # Fade-in from left animation
│   │   │   ├── FadeInRight.tsx   # Fade-in from right animation
│   │   │   ├── FadeInUp.tsx      # Fade-in from bottom animation
│   │   │   ├── ScaleIn.tsx       # Scale-in animation
│   │   │   ├── StaggerContainer.tsx  # Parent for stagger effects
│   │   │   └── StaggerItem.tsx   # Child for stagger effects
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx        # Navigation header with logo & menu
│   │   │   ├── Footer.tsx        # Footer with links & social
│   │   │   └── ProviderWrapper.tsx  # Global providers
│   │   └── sections/             # Page sections
│   │       ├── HeroSection.tsx           # Hero banner
│   │       ├── AboutSection.tsx          # About company
│   │       ├── AboutHeroSection.tsx      # About page hero
│   │       ├── MissionVisionSection.tsx  # Mission & vision
│   │       ├── MeetTeamSection.tsx       # Team members
│   │       ├── WhyChooseUsSection.tsx    # Value propositions
│   │       ├── ServicesSection.tsx       # Services showcase
│   │       ├── DigitalTransformationSection.tsx  # Digital transformation
│   │       ├── BlogSection.tsx           # Blog posts
│   │       ├── FAQSection.tsx            # FAQ accordion
│   │       └── ContactSection.tsx        # Contact form
│   ├── hooks/
│   │   ├── useApis.tsx                 # API hooks for data fetching
│   │   ├── useScrollToTop.ts           # Scroll to top functionality
│   │   └── useIntersectionObserver.ts  # Scroll animations
│   ├── utils/
│   │   ├── axios-instance.ts    # Axios configuration
│   │   └── constants.ts         # App constants
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/
│   └── assets/
│       └── images/              # Static images
├── .gitignore
├── bun.lock
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts
├── package.json
├── postcss.config.mjs           # PostCSS configuration
├── README.md
├── tailwindcss.config.ts        # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started

### **Prerequisites**

Make sure you have one of the following installed:

- **[Bun](https://bun.sh/)** (recommended) - v1.0.0 or higher
- **[Node.js](https://nodejs.org/)** - v18.0.0 or higher
- **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/)**

### **Installation**

1. **Clone the repository:**

```bash
# Clone from SBSC organization
git clone https://github.com/sbscphp/latila.git
cd latila
```

2. **Install dependencies:**

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_strapi_api_url
```

4. **Run the development server:**

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

5. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Sections Overview

### 🏠 **Home Page**

#### **Header**
- Responsive navigation with smooth scrolling
- Company logo (dynamically loaded from CMS)
- Desktop & mobile menu
- Contact CTA button
- Loading skeleton for logo

#### **Hero Section**
- Compelling headline and value proposition
- Professional hero image
- Call-to-action buttons
- Animated entrance effects

#### **About Section**
- Company introduction
- Founded in 2018
- Digital transformation focus
- Brand logo showcase

#### **Why Choose Us**
Five key differentiators:
- 🎯 **Holistic Approach** - End-to-end solutions
- 🔒 **Security at the Core** - Built-in security
- 🤝 **Client-Centric Partnership** - Your success is our mission
- 🌍 **Expertise Across Regions** - Global experience
- 🔄 **Adaptability** - Flexible solutions

#### **Services Section**
Five core offerings:
1. ☁️ **Cloud Advisory & Migration**
2. 🔐 **Cybersecurity & Compliance**
3. 💼 **Enterprise Application Modernization**
4. 📊 **IT Consulting & Project Management**
5. 🛠️ **Management Services**

#### **Digital Transformation Section**
- Transformation approach
- Process visualization
- Success metrics

#### **Blog Section**
- Featured articles
- Productivity tips
- Industry insights
- Read more links

#### **FAQ Section**
- Interactive accordion
- Common questions
- Smooth expand/collapse

#### **Contact Section**
- Validated contact form with:
  - Name (required, 2-50 characters)
  - Email (required, valid format)
  - Phone (optional, 10-15 digits)
  - Message (required, 10-1000 characters)
- Real-time validation
- Loading states
- Success/error feedback
- Character counter
- Professional contact image

#### **Footer**
- Company branding
- Quick links
- Social media
- Copyright info

### 📄 **About Page**

- About Hero Section
- Mission & Vision statements
- Meet the Team section
- Company values

---

## 🎨 Design System

### **Color Palette**

```css
/* Primary Colors */
--primary-blue: #00447D;
--dark-blue: #003366;

/* Light Variants */
--light-blue: #E6F2FF;
--lighter-blue: #CCE6FF;

/* Neutral Colors */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-900: #111827;

/* Semantic Colors */
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

### **Typography**

```css
/* Headings */
h1: 2.5rem - 4rem (40px - 64px) - Bold
h2: 2rem - 3rem (32px - 48px) - Bold
h3: 1.5rem - 2rem (24px - 32px) - Semibold
h4: 1.25rem - 1.5rem (20px - 24px) - Semibold

/* Body */
body: 1rem (16px) - Regular
small: 0.875rem (14px) - Regular
```

### **Spacing Scale**

Based on Tailwind's spacing system (4px base unit):
- `xs`: 0.5rem (8px)
- `sm`: 1rem (16px)
- `md`: 1.5rem (24px)
- `lg`: 2rem (32px)
- `xl`: 3rem (48px)
- `2xl`: 4rem (64px)

### **Border Radius**

- `rounded-sm`: 0.125rem (2px)
- `rounded`: 0.25rem (4px)
- `rounded-md`: 0.375rem (6px)
- `rounded-lg`: 0.5rem (8px)
- `rounded-xl`: 0.75rem (12px)
- `rounded-2xl`: 1rem (16px)
- `rounded-full`: 9999px

---

## 🔌 API Integration

### **Strapi CMS Backend**

The application integrates with a Strapi CMS backend for dynamic content management.

**Base URL:** `https://deserving-passion-2c6c2f79bf.strapiapp.com/api/`

### **Custom Hooks**

#### **`useFetchData(endpoint)`**
Fetches data from the API with React Query:

```typescript
const { data, isPending, error } = useFetchData('logo-lights?populate=*');
```

#### **`usePostData(endpoint)`**
Posts data to the API:

```typescript
const mutation = usePostData('contacts');
await mutation.mutateAsync(payload);
```

### **API Configuration**

Location: `app/utils/axios-instance.ts`

Features:
- Axios instance with base URL
- Request/response interceptors
- Error handling
- Token management

---

## 📜 Available Scripts

```json
{
  "dev": "bun run next dev --turbopack",      // Start development with Turbopack
  "build": "bun run next build --turbopack",  // Build for production
  "start": "bun run next start",              // Start production server
  "lint": "bun run eslint"                    // Run ESLint
}
```

### **Development**

```bash
bun run dev
# Starts development server on http://localhost:3000
# Includes hot-reload and Turbopack for faster builds
```

### **Production Build**

```bash
bun run build
# Creates optimized production build
# Outputs to .next/ directory
```

### **Production Server**

```bash
bun run start
# Starts production server
# Requires build step first
```

### **Linting**

```bash
bun run lint
# Runs ESLint to check code quality
# Auto-fixes fixable issues
```

---

## 🌐 Deployment

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sbscphp/latila)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

### **Netlify**

1. Connect your Git repository
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

### **Other Platforms**

The application can be deployed to any platform that supports Node.js:
- AWS Amplify
- DigitalOcean App Platform
- Render
- Railway
- Heroku

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **Branch Naming**

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates

### **Commit Convention**

Follow conventional commits:

```
feat: add new contact form validation
fix: resolve header logo loading issue
docs: update README installation steps
refactor: improve form error handling
style: format code with prettier
```

### **Pull Request Process**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential. 

**© 2025 Latila Consulting. All rights reserved.**

Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

## 📞 Contact & Support

### **Technical Support**
For technical issues or questions about the codebase:
- 📧 Email: dev@latila.com
- 🐛 Issues: [GitHub Issues](https://github.com/sbscphp/latila/issues)

### **Business Inquiries**
- 🌐 Website: [www.latila.com](#)
- 📧 Email: info@latila.com
- 📱 Phone: +1 (XXX) XXX-XXXX

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment tools
- **Tailwind Labs** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **TanStack** - For React Query

---

## 📊 Project Stats

- **Lines of Code:** ~5,000+
- **Components:** 20+
- **Pages:** 2
- **Dependencies:** 12
- **Dev Dependencies:** 8

---

<div align="center">

**Built with ❤️ by the Latila Development Team**

⭐ Star us on GitHub — it helps!

[⬆ Back to Top](#-latila-consulting---professional-business-website)

</div>
