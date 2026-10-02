export function createBrowserAdapter(adapter) { if (!adapter || typeof adapter.open !== 'function') throw new TypeError('adapter.open(url) is required'); return adapter; }
