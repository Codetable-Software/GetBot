import { stripTags, decodeEntities } from './html.js';
function firstMatch(html, regex) { const m = html.match(regex); return m ? decodeEntities(m[1].replace(/\s+/g, ' ').trim()) : ''; }
export function extractHtml(html, baseUrl) {
  const title = firstMatch(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const description = firstMatch(html, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) || firstMatch(html, /<meta\b[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const content = stripTags(html), links = [], seen = new Set();
  const re = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi; let m;
  while ((m = re.exec(html))) { try { const url = new URL(decodeEntities(m[1]), baseUrl).href; if (!/^https?:$/.test(new URL(url).protocol) || seen.has(url)) continue; seen.add(url); links.push({ url, text: stripTags(m[2]) }); } catch {} }
  return { title, description, content, links };
}
