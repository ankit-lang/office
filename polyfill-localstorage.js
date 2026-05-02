/**
 * Polyfill for Node.js v25+ which exposes a partial `localStorage` global
 * that exists as an object but lacks getItem/setItem methods.
 * This script is loaded via NODE_OPTIONS=--require before Next.js starts.
 */
if (typeof globalThis.localStorage !== "undefined") {
  if (typeof globalThis.localStorage.getItem !== "function") {
    const store = new Map();
    globalThis.localStorage = {
      getItem: (key) => store.get(key) ?? null,
      setItem: (key, value) => { store.set(key, String(value)); },
      removeItem: (key) => { store.delete(key); },
      clear: () => { store.clear(); },
      key: (index) => Array.from(store.keys())[index] ?? null,
      get length() { return store.size; },
    };
  }
}
