# Cross Examination ✝

A comprehensive web application dedicated to providing evidence for Christianity, featuring archaeological discoveries, biblical timelines, theological topics, and personal testimony.

## Project Structure

- `app/`: Next.js 15 App Router pages and layouts.
- `topics/`: TypeScript-based content store for apologetics topics.
- `components/`: Reusable UI components (including logic-heavy components like `Timeline` and `BibleVerse`).
- `lib/`: Utility functions and data fetchers.

## Content System

The site uses a structured content system located in `topics/`. Each topic file follows the `Topic` interface defined in `topics/types.ts`.

## Getting Started

This project uses `pnpm` for package management.

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Technologies

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: Radix UI / Shadcn UI
- **Icons**: Lucide React
- **Package Manager**: pnpm
