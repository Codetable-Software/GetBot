# GetBot

GetBot is a frontend-free web search engine core by Codetable Software.

It provides fetching, HTML extraction, result ranking, and a small search API. Search-source discovery is intentionally separated from the core so applications can plug in their own crawler, index, or permitted search provider.

## Usage

```js
import { search } from 'getbot';

const result = await search('minecraft', [
  { title: 'Minecraft', url: 'https://www.minecraft.net/', description: 'Official Minecraft website' }
]);

console.log(result);
```

## License

Apache License 2.0. Copyright 2026 Codetable Software.
