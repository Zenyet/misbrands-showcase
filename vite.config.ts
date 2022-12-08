import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig(({command, mode}) => {
    if (mode === 'production') {
        return {
            plugins: [react(), svgr()],
            base: '/showcase/', // 服务器的路径，若没设置二级目录之类的就用默认 development 的
            server: {
                port: 8080,
                host: true,
                open: true,
                hmr: true,
            },
            build: {
                sourcemap: false,
            }
        }
    } else if (mode === 'development') {
        return {
            base: './',
            server: {
                port: 8080,
                host: true,
                open: true,
                hmr: true,
            },
            build: {
                sourcemap: true
            }
        }
    }
});

