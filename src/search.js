import { rankResults } from './ranker.js';
export async function search(query, documents = [], options = {}) {
  if (typeof query !== 'string' || !query.trim()) throw new TypeError('query must be a non-empty string');
  const results = documents.filter(Boolean).map(doc => ({ title: doc.title ?? '', url: doc.url ?? '', description: doc.description ?? doc.snippet ?? '', content: doc.content ?? '' }));
  return { query: query.trim(), results: rankResults(results, query.trim()).slice(0, options.limit ?? 10) };
}
