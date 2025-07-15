# Flow International Group Website

## Overview

This is a modern React-based landing page for Flow International Group, an insurance agency that recruits agents to sell life insurance products. The application is built with a full-stack architecture using React + TypeScript on the frontend and Express.js on the backend, with a focus on multilingual support and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side navigation
- **State Management**: React Context for language management, TanStack Query for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
- **App Router**: Main application with route switching and state management
- **Topbar**: Sticky navigation with language switcher and join button
- **Sidebar**: Collapsible navigation menu with smooth scrolling to sections
- **Hero Section**: Landing area with call-to-action buttons
- **Feature Sections**: Benefits, How It Works, Requirements, Commission Plan, Training
- **Forms**: Join Us application form with validation
- **AI Chat**: Placeholder chat component for future AI integration
- **Multi-language Support**: Context-based internationalization

### Backend Components
- **Route Handler**: Express routes for join request management
- **Storage Layer**: In-memory storage with interface for future database integration
- **Schema Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Frontend to Backend
1. User fills out join form
2. Form data validated client-side
3. API request sent to `/api/join-request`
4. Backend validates with Zod schemas
5. Data stored and response sent back
6. UI updated with success/error feedback

### Database Schema
- **Users Table**: Basic user authentication structure
- **Join Requests Table**: Application data (name, language, email, phone, referral source)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI components via shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Utilities**: clsx, class-variance-authority for styling

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Database Connection**: Neon Database serverless driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions

## Deployment Strategy

### Development
- **Dev Server**: Vite dev server with Express backend integration
- **Hot Reload**: Full-stack hot module replacement
- **Build Process**: Vite for frontend, esbuild for backend bundling

### Production
- **Build**: Static frontend build served by Express
- **Database**: PostgreSQL via Neon Database with connection pooling
- **Environment**: NODE_ENV-based configuration
- **Assets**: Static asset serving with proper caching headers

### Configuration
- **Database**: Configured via DATABASE_URL environment variable
- **Build Output**: Frontend builds to `dist/public`, backend to `dist/index.js`
- **Migration**: Drizzle migrations in `migrations/` directory

The application is structured as a monorepo with clear separation between client, server, and shared code, making it easy to maintain and extend with additional features like the planned AI chat integration.