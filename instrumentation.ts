// Patch broken localStorage in Node.js v25+
// Node.js 25 introduces a partial Web Storage global but localStorage.getItem
// is not a function, causing SSR crashes in Next.js.
const patchWebStorage = () => {
  const makeStorage = () => {
    const store = new Map<string, string>();
    return {
      getItem: (key: string): string | null => store.get(key) ?? null,
      setItem: (key: string, value: string): void => { store.set(key, String(value)); },
      removeItem: (key: string): void => { store.delete(key); },
      clear: (): void => { store.clear(); },
      key: (index: number): string | null => Array.from(store.keys())[index] ?? null,
      get length(): number { return store.size; },
    };
  };

  if (typeof globalThis.localStorage !== "undefined" &&
      typeof (globalThis.localStorage as Storage).getItem !== "function") {
    (globalThis as Record<string, unknown>).localStorage = makeStorage();
  }

  if (typeof globalThis.sessionStorage !== "undefined" &&
      typeof (globalThis.sessionStorage as Storage).getItem !== "function") {
    (globalThis as Record<string, unknown>).sessionStorage = makeStorage();
  }
};

// Run immediately at module load time
patchWebStorage();

export async function register() {
  // Also run in register() for extra safety
  patchWebStorage();
}

