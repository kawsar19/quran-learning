# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
this repository.

The goal is to clearly define how the **Next.js – 30 Days Quran Learning Website**
should be structured and developed.

---

## Project Overview

**Project Name:** 30 Days Quran Learning Website  
**Framework:** Next.js (React)  
**Type:** Educational website  
**Routing:** File-based routing (Next.js App Router)

This project is a **30-day Quran learning program** where:

- Each day has its **own dedicated page**
- Each page contains:
  - Written lesson (custom HTML, tables, text, etc.)
  - One embedded video
- Lessons are NOT generated from JSON or CMS
- Content is written manually inside each page/component

---

## Key Architectural Decision (IMPORTANT)

❌ **DO NOT use `data.json`, CMS, or dynamic lesson generation**

✅ **Each day must be a separate page/component**

Reason:

- Written lessons may include:
  - Tables
  - Custom formatting
  - Word-processor–style content
- Author wants full control over markup per lesson

---

## Tech Stack

- Next.js (App Router)
- React (functional components)
- TypeScript (preferred, optional)
- Tailwind CSS
- No backend
- No database
- No CMS
- No JSON-based lesson storage

---

## Project Structure (Required)

/project-root
├── app/
│ ├── layout.tsx
│ ├── page.tsx # Home page
│ ├── lessons/
│ │ ├── page.tsx # Lessons index (Day 1–30)
│ │ ├── day-1/
│ │ │ └── page.tsx
│ │ ├── day-2/
│ │ │ └── page.tsx
│ │ ├── day-3/
│ │ │ └── page.tsx
│ │ ├── ...
│ │ └── day-30/
│ │ └── page.tsx
│ ├── components/
│ │ ├── LessonLayout.tsx
│ │ ├── LessonNavigation.tsx
│ │ ├── VideoPlayer.tsx
│ │ └── Header.tsx
│ └── globals.css
├── public/
│ └── images/
├── tailwind.config.js
├── next.config.js
├── package.json
└── CLAUDE.md

---

## Lesson Page Rules

Each lesson page (`/lessons/day-X/page.tsx`) must:

- Be a **standalone page**
- Contain hardcoded JSX/HTML content
- Allow:
  - Paragraphs
  - Headings
  - Lists
  - Tables
  - Custom markup
- Include one video
- Use a shared layout/component for consistency

---

(Actual implementation may vary.)

---

## Navigation Rules

- Lesson index page lists all 30 days
- Each lesson page includes:
  - Previous Day button (if applicable)
  - Next Day button (if applicable)
  - Back to Lessons button
- Navigation paths are hardcoded or derived from day number

---

## SEO Guidelines

Each lesson page must include:

- Unique `<title>`
- Meta description
- Open Graph tags
- Clean URL structure:
  - `/lessons/day-1`
  - `/lessons/day-2`
  - ...
  - `/lessons/day-30`

---

## UI / UX Guidelines

- Mobile-first
- Clean reading experience
- Simple typography
- Respectful Islamic presentation
- Avoid unnecessary animations
- Use Tailwind utility classes

---

## Coding Guidelines for AI

When generating code:

- Do NOT introduce JSON-based lesson storage
- Do NOT generate CMS integrations
- Create **separate pages/components per day**
- Keep lesson content editable inside JSX
- Reuse layout and navigation components
- Keep code readable and maintainable

---

## Content Guidelines

- Quran-related content must be respectful
- Arabic text must not be altered
- Tables and structured content are allowed
- Avoid speculative religious explanations

---

## Deployment

- Preferred platform: Vercel
- Static rendering
- No server-side APIs required

---

## Future Enhancements (Optional)

- Progress indicator (Day completed)
- Language toggle (Bangla / English)
- Audio recitation
- PDF downloads
- Dark mode

---

## Final Instruction to AI

This project intentionally avoids dynamic content systems.
All lesson content lives inside individual lesson pages.

Follow this rule strictly.

---

## End of CLAUDE.md
