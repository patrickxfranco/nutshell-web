import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './components/ThemeProvider';

const RootElement: HTMLElement = document.getElementById('root')!;

createRoot(RootElement).render(<ThemeProvider>Hello World</ThemeProvider>);
