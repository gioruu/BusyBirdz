import { defineConfig } from '@tanstack/start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
   server: {
      preset: 'vercel',
   },
   vite: {
      plugins: [
         // this is the plugin that enables path aliases
         viteTsConfigPaths({
            projects: ['./tsconfig.json'],
         }),
         ViteWebfontDownload([
            'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
         ]),
         ViteImageOptimizer({

         })
      ],
   },
})