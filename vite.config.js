import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import compression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig(()=> {
  return {
    build:{
      outDir:"build",
    },
    server: {
      port: 3000,
    },
  
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(),
    compression({
    algorithm: 'Brotli', // gzip, brotliCompress, deflate are supported
    ext: '.gz' // this is optional, '.gz' is default
  })],
  };
});
