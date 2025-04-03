import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexões externas
    port: 5173, // Porta padrão do Vite (pode mudar)
    strictPort: true, // Garante que a porta não mude
    cors: true, // Ativa CORS para todas as origens
    hmr: {
      protocol: 'ws', // Usa WebSockets para Hot Module Replacement
      host: 'localhost', // Pode ser ajustado conforme necessário
    },
    allowedHosts: true, // Permite todas as origens
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend local (ajuste se necessário)
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
