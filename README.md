# devinpatterson.dev

Personal portfolio website for Devin Patterson - Platform Engineering Leader & AI Infrastructure Expert.

## Features

- **Home Page**: Hero section, expertise areas, career highlights, AI experience
- **Resume Page**: Full professional resume with work experience, education, certifications
- **Projects Page**: Portfolio of AI infrastructure and platform engineering projects
- **Certifications Page**: Current and planned certifications with roadmap
- **Contact Page**: Contact information and availability

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── resume/            # Resume page
│   ├── projects/          # Projects page
│   ├── certifications/    # Certifications page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # UI primitives (Button, Card, Badge)
│   ├── Navigation.tsx    # Site navigation
│   └── Footer.tsx        # Site footer
├── data/                  # Data files
│   └── resume.ts         # Resume data
└── lib/                   # Utilities
    └── utils.ts          # Helper functions
```

## Deployment

This site is deployed to **GitHub Pages** via GitHub Actions.

### CI/CD Pipeline

- **On PR**: Runs lint, type-check, build, and test
- **On merge to main**: Automatically deploys to GitHub Pages

### Manual Deployment

```bash
# Build locally
npm run build

# Output is in the 'out' directory
```

## Domain Setup

1. Domain registered at Squarespace
2. Configure DNS to point to GitHub Pages
3. Add custom domain in GitHub repo settings

## Related Projects

- **Resume Generator** (`../resume-generator/`): Python CLI tool for managing resume data in YAML format
- **LinkedIn Post Bot** (`../linkedin-post-bot/`): AI-powered LinkedIn post generator

## License

Private - All rights reserved.
