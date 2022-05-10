import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/J-UI',
  build: {
    outDir: 'docs',
  },
});
