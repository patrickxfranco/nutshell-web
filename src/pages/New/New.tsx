import type { ReactElement } from 'react';

import { Card } from '@/components/Card';
import { PackagePlus } from 'lucide-react';

export function New(): ReactElement {
  return (
    <div className="mx-4 pt-4">
      <div className="sm:hidden flex flex-col gap-1 my-6">
        <div className="flex flex-row items-center gap-3">
          <PackagePlus size={18} className="text-amber-300" />
          <h1 className="font-bold text-xl">Adicionar novo Conteúdo</h1>
        </div>
        <p className="ml-7 font-light text-muted-foreground text-xs">
          Preencha o formulário abaixo para adicionar um novo conteúdo a sua lista
        </p>
      </div>
      <section id="card-preview" className="flex flex-col gap-4">
        <Card
          name="Game Of Thrones"
          description="Game of Thrones conta a história de um lugar onde uma força destruiu o equilíbrio das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos. A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso, conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto."
          type="S"
          coverUrl="https://images4.alphacoders.com/135/1356023.jpeg"
          preview
        />
        <Card
          name="Game Of Thrones"
          description="Game of Thrones conta a história de um lugar onde uma força destruiu o equilíbrio das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos. A irmandade da Patrulha da Noite busca proteger o reino de cada criatura que pode vir de lá da Muralha, mas já não tem os recursos necessários para garantir a segurança de todos. Depois de um verão de dez anos, um inverno rigoroso promete chegar com um futuro mais sombrio. Enquanto isso, conspirações e rivalidades correm no jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto."
          type="S"
          coverUrl="https://images4.alphacoders.com/135/1356023.jpeg"
          preview
          expanded
        />
      </section>
    </div>
  );
}
