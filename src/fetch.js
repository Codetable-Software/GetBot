export async function fetchPage(url, options = {}) {
  const target = new URL(url);
  if (!['http:', 'https:'].includes(target.protocol)) throw new TypeError('Only HTTP(S) URLs are supported');
  const response = await fetch(target, { redirect: 'follow', headers: { 'user-agent': options.userAgent ?? 'GetBot/1.0 (+search engine)', accept: 'text/html,application/xhtml+xml' }, signal: options.signal });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${response.url}`);
  return { url: response.url, status: response.status, contentType: response.headers.get('content-type') ?? '', body: await response.text() };
}
