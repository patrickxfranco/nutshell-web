import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarArea() {
  return (
    <div>
      <Avatar className="rounded-sm size-9">
        <AvatarFallback>PF</AvatarFallback>
        <AvatarImage src="https://www.github.com/patrickxfranco.png" />
      </Avatar>
    </div>
  );
}
