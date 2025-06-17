import { Star } from 'lucide-react';

import { Card } from '@/components/Card';

import type { ReactElement } from 'react';

export function MobileView(): ReactElement {
  return (
    <>
      <div className="sm:hidden flex flex-col gap-1 my-6">
        <div className="flex flex-row items-center gap-3">
          <Star size={18} className="fill-amber-300 text-amber-300" />
          <h1 className="font-bold text-xl">Meus Conteúdos</h1>
        </div>
        <p className="ml-7 font-light text-muted-foreground text-xs">Os filmes e séries que você mais gosta listados abaixo</p>
      </div>
      <main className="flex flex-col gap-4">
        <Card
          name="Stranger Things"
          description="Situada no início dos anos 1980, Stranger Things se passa na cidade rural fictícia de Hawkins, Indiana. Como fachada, o laboratório da região realizava experimentos científicos para o Departamento de Energia Americano, quando na realidade, os pesquisadores ali investiram em experimentos com o paranormal e o sobrenatural, incluindo o uso de cobaias humanas. Não intencionalmente, eles criaram um portal para uma dimensão alternativa conhecida como Mundo Invertido, o que iria impactar a vida dos residentes da pequena cidade. Em 1983, quando Will Byers (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo. Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo em direção aos experimentos secretos do governo e a Eleven (Millie Bobby Brown), uma peculiar menina perdida na floresta. Assim como as crianças, a mãe Joyce Byers (Winona Ryder) está determinada e fará o impossível para rever o filho."
          coverUrl="https://4kwallpapers.com/images/wallpapers/stranger-things-3840x2160-18568.jpg"
          // logo="https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64f9df08b40422b520a186f0_logo%20stranger%20things%20png.png"
          type="S"
        />
        <Card
          name="Scott Pilgrim Contra o Mundo"
          description="Scott Pilgrim (Michael Cera) tem 23 anos, integra uma banda de colégio, vive trocando de emprego e tem um namoro firme. Sua vida está maravilhosa, até conhecer Ramona V. Flowers (Mary Elizabeth Winestead). Ele logo se apaixona perdidamente por ela, só que não será fácil conquistar seu amor. Para tanto ele precisa enfrentar os sete ex-namorados dela, que estão dispostos a tudo para impedir sua felicidade com outra pessoa."
          coverUrl="https://i.redd.it/vr24n22tp9501.png"
          type="M"
        />
        <Card
          name="Ela"
          description="Theodore é um escritor solitário, que acaba de comprar um novo sistema operacional para seu computador. Para a sua surpresa, ele acaba se apaixonando pela voz deste programa informático, dando início a uma relação amorosa entre ambos. Esta história de amor incomum explora a relação entre o homem contemporâneo e a tecnologia."
          coverUrl="https://image.tmdb.org/t/p/original/nG5zmbVeYlcDhckrPAe06fArywn.jpg"
          type="M"
        />
        <Card
          name="O Fabuloso Destino de Amélie Poulain"
          description="Amélie é uma jovem que se muda do subúrbio, onde morava com a família, para Paris, para trabalhar como garçonete. Ela encontra uma caixinha cheia de itens pessoais escondida no banheiro de sua casa e decide entregá-la ao antigo dono, revendo pequenos conceitos que mudarão sua vida."
          coverUrl="https://hhmagazine.com.br/wp-content/uploads/2020/10/amelie.jpg"
          type="M"
        />
        <Card
          name="O Grande Hotel Budapeste"
          description="No período entre as duas guerras mundiais, o famoso gerente de um hotel europeu conhece um jovem empregado e os dois tornam-se melhores amigos. Entre as aventuras vividas pelos dois constam o roubo de um famoso quadro do Renascimento, a batalha pela grande fortuna de uma família e as transformações históricas durante a primeira metade do século XX."
          coverUrl="https://assets.mubicdn.net/images/film/111139/image-w856.jpg"
          type="M"
        />
        <Card
          name="Spring Breakers: Garotas Perigosas"
          description="Quatro estudantes universitárias assaltam um restaurante a fim de financiar suas férias de primavera e acabam presas. Um traficante de armas paga a fiança das moças como agradecimento por terem ajudado na morte de seu maior inimigo e, em troca, pede que as garotas realizem um trabalho sujo."
          coverUrl="https://cantodosclassicos.com/wp-content/uploads/2016/03/filmes-fotografia_0015_paletas-de-cores-filmes.jpg"
          type="M"
        />
        <Card
          name="Squid Game"
          description="Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais."
          coverUrl="https://4kwallpapers.com/images/wallpapers/squid-game-tv-series-2021-netflix-series-2880x1800-6695.jpg"
          type="S"
        />
      </main>
    </>
  );
}
