import type { ContentProps } from '@/types/content';

const STORAGE_KEY = '@Nutshell/contents';

export function index(): ContentProps[] {
  const contents: string | null = localStorage.getItem(STORAGE_KEY);
  return contents ? JSON.parse(contents) : [];
}

export function get(identification: string): ContentProps {
  const contents: ContentProps[] = index();
  const content: ContentProps[] = contents.filter((c) => c.identification === identification);
  return content[0];
}

type UpdateProps = { identification: string; contentUpdated?: ContentProps };
export function update({ identification, contentUpdated }: UpdateProps): ContentProps[] {
  const allContents: ContentProps[] = index();
  const newContents: ContentProps[] = allContents.filter((c) => c.identification !== identification);
  let updatedContents: ContentProps[];

  if (contentUpdated) {
    updatedContents = [contentUpdated, ...newContents];
  } else {
    updatedContents = newContents;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContents));
  return updatedContents;
}

export function create({ title, type, website, cover, description }: ContentProps): ContentProps[] {
  const contents: ContentProps[] = index();
  const newContent: ContentProps = {
    identification: String(Date.now()),
    title,
    type,
    website,
    cover,
    description,
  };
  const updatedContents: ContentProps[] = [newContent, ...contents];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContents));
  return updatedContents;
}

export function del(identification: string): ContentProps[] {
  const contents: ContentProps[] = index();
  const newContents: ContentProps[] = contents.filter((c) => c.identification !== identification);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newContents));
  return newContents;
}
