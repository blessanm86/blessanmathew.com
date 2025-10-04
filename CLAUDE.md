# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Create production build 
- **Production**: `npm start` - Start production server
- **Format**: `prettier --write .` - Format code (uses default config)

## Allowed Commands
- `npm outdated` - Check for outdated packages

## Architecture Overview

This is a Next.js-based personal blog website with the following key characteristics:

### Core Technologies
- **Framework**: Next.js 12 with React 17
- **Styling**: Tailwind CSS 3 with dark mode support (`next-themes`)
- **Content**: Markdown posts with frontmatter (using `gray-matter` and `marked`)
- **Syntax highlighting**: highlight.js
- **Typography**: @tailwindcss/typography plugin

### Project Structure
- `/pages` - Next.js pages with file-based routing
- `/components` - Reusable React components (JSX files)
- `/posts` - Markdown blog posts with YAML frontmatter
- `/lib/posts.js` - Post processing utilities (reading, parsing, filtering)
- `/config.js` - Site configuration (header links, social links, tag styling)
- `/public` - Static assets

### Key Features
- **Static Generation**: Uses `getStaticProps` for build-time post processing
- **Dark Mode**: Class-based theme switching with system preference detection
- **Blog System**: Markdown posts with tags, reading time estimation, and date formatting
- **Tag Filtering**: Posts can be filtered by tags with styled tag badges
- **SEO**: Open Graph meta tags and semantic HTML structure

### Important Patterns
- **Path Aliases**: Webpack configured with aliases (Components, Lib, Posts, Assets)
- **Post Processing**: Posts are processed at build time with frontmatter extraction, reading time calculation, and date formatting
- **Theme Management**: Dark/light mode handled via `next-themes` with class-based Tailwind variants
- **Component Structure**: Layout component wraps all pages with header, theme toggle, and main content area

### Content Management
Posts are stored as Markdown files in `/posts` with filename format `YYYY-MM-DD-slug.md`. Each post requires frontmatter with `date`, `title`, and `tags` fields. The `lib/posts.js` module handles all post operations including listing, filtering by tags, and individual post retrieval with HTML conversion.