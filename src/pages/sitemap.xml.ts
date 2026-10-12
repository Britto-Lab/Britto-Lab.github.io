import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://britto-lab.github.io')).origin;
  const pages = ['/', '/pi/', '/research/', '/team/', '/teaching/', '/collaborations-funding/', '/gallery/', '/news/', '/join-us/'];
  const highlights = await getCollection('researchHighlights');
  const all = [...pages, ...highlights.map((h) => `/research-highlights/${h.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all
    .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
