# Evergreen.ai Landing Page

A modern, responsive landing page for Evergreen.ai - an AI financial advisor for tech professionals.

## Overview

Evergreen.ai is an AI-powered financial advisory platform that understands RSUs, ISOs, AMT, and IPO scenarios. This landing page showcases the product features with a clean, professional design optimized for all devices.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile views
- **Modern Tech Stack**: Built with Next.js, TypeScript, and Tailwind CSS
- **Interactive Chat Interface**: Desktop and mobile chat mockups
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Semantic HTML and proper contrast ratios

## Sections

1. **Header**: Fixed navigation with logo and CTA buttons
2. **Hero Section**: Gradient background with headline, chat interface, and feature highlights
3. **Features Section**: Three key product benefits with numbered list
4. **Equity Insight Section**: Accordion FAQ for common equity questions
5. **Bill Harris Section**: Founder bio with portrait
6. **CTA Section**: Final call-to-action with legal disclaimers
7. **Footer**: Site navigation, legal links, and contact information

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16+ with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: 
  - Cormorant Garamond (headings)
  - Heebo (body text)
  - Lekton (numbers/labels)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jose-dev1114/evergreen-ai.git
cd evergreen-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
├── public/              # Static assets
│   ├── logo.svg
│   ├── avatar.png
│   ├── intro.png
│   └── book.svg
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

## Design System

### Colors
- Primary Blue: `#295CCC`
- Dark Background: `#0E0E0E`
- White: `#FFFFFF`
- Muted Text: `rgba(255, 255, 255, 0.8)`

### Typography
- **H1**: Cormorant Garamond, 48px (mobile) / 88px (desktop)
- **H2**: Cormorant Garamond, 40px (mobile) / 64-80px (desktop)
- **Body**: Heebo, 14-16px
- **Labels**: Lekton, 12px

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Deployment

The site is automatically deployed to Vercel on every push to the main branch.

To deploy manually:
```bash
vercel --prod
```

## License

This project is for demonstration purposes. All rights reserved by Evergreen Wealth Corporation.

## Credits

- Design inspired by the official Evergreen.ai brand
- Built by [joseiscoding](https://github.com/jose-dev1114)
