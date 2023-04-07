// Imports
// ========================================================
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Exports
// ========================================================
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.tsx']
  },
});