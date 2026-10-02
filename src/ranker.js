export function scoreResult(result, query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const haystack = `${result.title ?? ''} ${result.description ?? ''}`.toLowerCase();
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 1 : 0), 0);
}
export function rankResults(results, query) { return [...results].map((r, i) => ({ ...r, score: scoreResult(r, query), _i: i })).sort((a, b) => b.score - a.score || a._i - b._i).map(({ _i, ...r }) => r); }
