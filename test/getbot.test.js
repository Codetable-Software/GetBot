import test from 'node:test';
import assert from 'node:assert/strict';
import { extractHtml, search } from '../index.js';

test('extracts HTML metadata and links', () => {
  const html = '<title>Minecraft</title><meta name="description" content="A game"><a href="/wiki">Wiki</a><p>Hello world</p>';
  const r = extractHtml(html, 'https://example.com/page');
  assert.equal(r.title, 'Minecraft'); assert.equal(r.description, 'A game'); assert.match(r.content, /Hello world/); assert.equal(r.links[0].url, 'https://example.com/wiki');
});
test('ranks matching result first', async () => {
  const r = await search('minecraft', [{ title: 'Other', url: 'https://a', description: 'Nothing' }, { title: 'Minecraft', url: 'https://b', description: 'Minecraft game' }]);
  assert.equal(r.results[0].title, 'Minecraft'); assert.equal(r.results[0].score, 1);
});
test('rejects empty query', async () => { await assert.rejects(() => search('  '), /non-empty/); });
