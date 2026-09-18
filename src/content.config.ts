import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Research themes — shown as click-to-open dialog cards
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number().default(1),
  }),
});

// The four Research sub-pages (Publications/Patents, Translational Research,
// Academia-Industry Partnerships, Academic Entrepreneurship) — reached via the
// Research nav dropdown, each its own page with bullet/numbered content.
const researchHighlights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research-highlights' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(1),
  }),
});

// Teaching — its own top-level nav section, bullet-point content
const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(1),
  }),
});

// Current lab members — organized into tabs by category
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    category: z.enum(['PhD Student', 'Project Assistant', 'Semester Project Intern']),
    photo: z.string(),
    order: z.number().default(1),
    email: z.string().optional(),
    orcid: z.string().optional(),
    google_scholar: z.string().optional(),
    linkedin: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

// Past lab members — simple one-line list, grouped by category
const alumni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alumni' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['Postdoc', 'PhD', 'Masters', 'Undergraduate', 'Research Associate']),
    info: z.string(),
    order: z.number().default(1),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    type: z.enum(['research-publication', 'review', 'patent', 'book-chapter']).default('research-publication'),
    featured: z.boolean().default(false),
    external_url: z.string().optional(),
  }),
});

// Academic & Industrial collaborators — simple list, no photos/logos needed
const collaborations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collaborations' }),
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    institution: z.string(),
    type: z.enum(['academic', 'industry']),
    order: z.number().default(1),
  }),
});

// Current & past funding as PI
const funding = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/funding' }),
  schema: z.object({
    project_title: z.string(),
    funding_agency: z.string(),
    duration: z.string(),
    status: z.enum(['Current', 'Past']).default('Current'),
    grant_number: z.string().optional(),
    order: z.number().default(1),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    caption: z.string().optional(),
    date: z.string(),
    order: z.number().default(1),
  }),
});

// Links to press/media coverage — shown as a card section on the Gallery page
const mediaCoverage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media-coverage' }),
  schema: z.object({
    title: z.string(),
    source: z.string(),
    url: z.string(),
    date: z.string(),
    order: z.number().default(1),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['Publication', 'Patent', 'Award', 'Event', 'Grant', 'General']),
    image: z.string().optional(),
    external_url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const join = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/join' }),
  schema: z.object({
    title: z.string(),
    role_type: z.enum(['PhD', 'Postdoc', 'Masters/Project', 'Research Assistant', 'Other']),
    open: z.boolean().default(true),
    order: z.number().default(1),
  }),
});

// The PI page — one single entry with structured fields
const pi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pi' }),
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    photo: z.string(),
    email: z.string().optional(),
    orcid: z.string().optional(),
    google_scholar: z.string().optional(),
    linkedin: z.string().optional(),
    education: z.array(z.string()).default([]),
    employment: z.array(z.string()).default([]),
    other_positions: z.array(z.string()).default([]),
    awards: z.array(z.string()).default([]),
    invited_presentations: z.array(z.string()).default([]),
    service_activities: z.array(z.string()).default([]),
    international_meetings_posters: z.array(z.string()).default([]),
    scientific_consultant_company: z.string().optional(),
    scientific_consultant_description: z.string().optional(),
  }),
});

export const collections = {
  research,
  researchHighlights,
  teaching,
  team,
  alumni,
  publications,
  collaborations,
  funding,
  gallery,
  mediaCoverage,
  news,
  join,
  pi,
};
