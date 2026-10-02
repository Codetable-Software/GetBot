export function addCitations(results) { return results.map((result, index) => ({ ...result, citation: `[${index + 1}]` })); }
