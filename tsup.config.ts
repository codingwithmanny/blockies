// Types
// ========================================================
import { defineConfig } from 'tsup';

// Exports
// ========================================================
export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true
});