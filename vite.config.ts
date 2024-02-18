import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
    publicDir: 'src/static',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
