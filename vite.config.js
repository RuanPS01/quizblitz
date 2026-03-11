import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste 'base' para o nome do seu repositório no GitHub Pages
  // Ex: se o repo é 'quizblitz' e fica em usuario.github.io/quizblitz/
  // Para domínio customizado na raiz, use '/'
  base: '/quizblitz/',
})
