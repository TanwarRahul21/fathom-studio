# Fathom Studio

**Interfaces That Age Like Architecture**

A dark, cinematic single-page site for a fictional web design studio — built as a learning project to explore modern React animation techniques, glassmorphism UI, and scroll-driven motion design.

🔗 **Live site:** [fathom-studio-rho.vercel.app](https://fathom-studio-rho.vercel.app)

---

## Tech Stack

- **React 18** + **TypeScript** — component architecture
- **Vite** — dev server & build tooling
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered and load animations
- **Supabase** — backend for the contact form (Postgres + Row Level Security)
- **Lucide React** — icon set

## Features

- **Liquid-glass UI** — custom CSS gradient-border components used throughout (nav, cards, badges)
- **Word-by-word blur-in text animation** on the hero headline
- **Consistent scroll-reveal motion** across every section, via a shared `<Reveal>` component
- **Active nav-link highlighting** — the nav shows which section you're currently viewing
- **Accessible FAQ accordion** — built with native `<details>`/`<summary>`, no extra JS required
- **Contact form wired to Supabase** — submissions are stored in a `contact_submissions` table
- **Fully responsive** — mobile hamburger menu, adaptive layouts down to small screens
- **Respects `prefers-reduced-motion`** across all animated components

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Capabilities.tsx
│   ├── StatementBreak.tsx
│   ├── Work.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── BlurText.tsx
│   ├── FadingVideo.tsx
│   ├── Reveal.tsx
│   └── icons/
├── hooks/
│   └── useActiveSection.ts
├── lib/
│   └── supabase.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

**1. Clone the repo**
```bash
git clone https://github.com/TanwarRahul21/fathom-studio.git
cd fathom-studio
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Copy `.env.example` to `.env` and fill in your own Supabase project details:
```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase publishable (anon) key — safe for client-side use |

**4. Run the dev server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

## Database Setup (Supabase)

The contact form requires one table. Run this in your Supabase SQL Editor:

```sql
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  budget text,
  message text,
  created_at timestamptz default now()
);

alter table contact_submissions enable row level security;

create policy "Allow public inserts"
  on contact_submissions for insert
  to anon
  with check (true);
```

## Deployment

This project is deployed on **Vercel**, connected directly to this GitHub repository — every push to `main` triggers an automatic redeploy.

If you fork this project, remember to add the same two environment variables in your Vercel project settings (**Settings → Environment Variables**), since `.env` is git-ignored and won't carry over automatically.

## Notes

This is a personal learning project exploring frontend animation and design systems — not a real business or agency. Client names, testimonials, and project showcases are placeholder content.

## License

Personal/educational use.
