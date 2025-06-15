import { Input } from '@/components/ui/input';

export function SearchArea() {
  return (
    <div className="w-full">
      <Input placeholder="Buscar conteúdos" className="bg-white dark:bg-black sm:w-100" />
    </div>
  );
}
