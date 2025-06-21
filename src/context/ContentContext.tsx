import type { ContentProps } from '@/types/content';
import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction } from 'react';

interface ContentContextType {
  content: ContentProps[];
  setContent: Dispatch<SetStateAction<ContentProps[]>>;
}

export const ContentContext = createContext<ContentContextType>({ content: [], setContent: () => {} });

export function ContentProvider({ children }: { children: ReactElement }) {
  const [content, setContent] = useState<ContentProps[]>([]);

  return <ContentContext.Provider value={{ content, setContent }}>{children}</ContentContext.Provider>;
}
