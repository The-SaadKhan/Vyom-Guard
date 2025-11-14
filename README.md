# VyomGarud - Autonomous Tactical UAVs

Advanced autonomous systems for intelligence, surveillance, and tactical operations.

## Features

- **Precision Engineering**: Built for demanding missions and critical operations
- **AI-Powered Autonomy**: Advanced autonomous flight and decision-making
- **Military-Grade Security**: End-to-end encrypted communications
- **Extended Range**: 500+ km operational range
- **Mission-Ready**: Deployable in harsh field conditions
- **24/7 Support**: Round-the-clock operational support

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: npm/bun

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vyomgarud-skyview

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing hero section
│   ├── Navigation.tsx   # Header navigation
│   ├── About.tsx        # About/mission section
│   ├── Capabilities.tsx # Product showcase
│   ├── Highlights.tsx   # Trust & credibility section
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── ui/             # UI component library
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and media
├── index.css           # Global styles
└── main.tsx            # App entry point
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Key Features Implemented

- Responsive design for all devices
- Dark theme with orange accent color (#ff7b00)
- Smooth scroll navigation
- Glass morphism effects
- Animated components with Framer Motion
- Professional typography and spacing
- Optimized performance with lazy loading

## Deployment

The project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any standard web hosting

Simply upload the contents of the `dist/` folder after building.

## Performance

- Production build: ~467 KB JavaScript (gzipped: ~146 KB)
- CSS: ~76 KB (gzipped: ~13 KB)
- Optimized animations with will-change and GPU acceleration
- Lazy loading for images
- Minimal bundle size

## License

All rights reserved. VyomGarud © 2025

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/59654e1d-3e99-4181-8a4f-63a19c2c7485) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
