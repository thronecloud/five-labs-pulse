# FiveLabs - Blockchain Infrastructure Company

A modern React website for FiveLabs, featuring a unique retro Windows 95-style interface.

## About FiveLabs

FiveLabs is a blockchain trading insights, infrastructure provider, media creation, and growth advisory company serving the crypto ecosystem globally.

## Technology Stack

This project is built with:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **React Router DOM** for navigation
- **TanStack Query** for state management

## Getting Started

### Prerequisites

- Node.js (v18.18.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```sh
git clone <YOUR_GIT_URL>
cd five-labs-pulse
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- **Retro Interface**: Unique Windows 95-style design with modern functionality
- **Multi-page Navigation**: Home, Team, Services, and Insights pages
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Architecture**: Built with latest React patterns and best practices
- **Type Safety**: Full TypeScript implementation

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   ├── RetroWindow.tsx # Retro-styled window component
│   └── RetroTaskbar.tsx # Bottom taskbar
├── pages/              # Application pages
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

© FiveLabs LLC, 2024