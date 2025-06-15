import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { UserConfig } from 'vite';

export default {
  plugins: [tailwindcss(), tsconfigPaths()],
} satisfies UserConfig;
