import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/JJ-UI',
  build: {
    outDir: 'docs',
  },
});
