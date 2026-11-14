import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	base: '/how-i-roll/',
	build: {
		outDir: 'build',
	},
	plugins: [
		react(),
		VitePWA({
			injectRegister: 'script',
			registerType: 'autoUpdate',
			manifest: false,
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
			},
		}),
	],
	test: {
		environment: 'happy-dom',
	},
});
