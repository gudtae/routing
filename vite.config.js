import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        outDir: './static'
    },
    plugins: [
        handlebars({
          partialDirectory: resolve(__dirname, './src/partials'),
          
        }),
        
      ],

})