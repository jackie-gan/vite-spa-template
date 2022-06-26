import path from 'path';
import { UserConfig, splitVendorChunkPlugin } from 'vite';
import postcssUrl from 'postcss-url';
import vuePlugin from '@vitejs/plugin-vue';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';

export default (): UserConfig => {
    return {
        base: '/spa/',
        resolve: {
            alias: {
                '@': path.join(__dirname, 'scr'),
            },
        },
        css: {
            postcss: {
                plugins: [
                    /* inline assets(e.g., png, svg) */
                    postcssUrl({
                        url: 'inline',
                        encodeType: 'base64',
                        maxSize: 3 * 1024,
                    }),
                ],
            },
        },
        esbuild: {
            target: 'es2015',
        },
        plugins: [vuePlugin(), vueJsxPlugin(), eslintPlugin(), splitVendorChunkPlugin()],
        server: {
            host: '127.0.0.1',
            strictPort: true,
            port: 8081,
        },
    };
};
