import arraySample from '@/lib/array-sample';
import { fetchChampions } from '@/lib/lol-api';
import { use } from 'react';
import ChampionGrid from './ChampionGrid';
import ShareButton from './ShareButton';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    seed: string[];
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const data = use(fetchChampions());

  const pool = arraySample(data, 30, params.seed[0]);

  const left = pool.slice(0, 15);
  const right = pool.slice(15);

  return (
    <main className="container mx-auto flex min-h-screen w-full items-center justify-center">
      <ChampionGrid champions={left} />
      <div className="mx-8 uppercase">vs</div>
      <ShareButton />
      <ChampionGrid champions={right} rtl />
    </main>
  );
};

export default Page;
