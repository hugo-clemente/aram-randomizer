import { CHAMPION_IMAGE_ENDPOINT, fetchChampions } from '@/lib/lol-api';
import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  champions: Awaited<ReturnType<typeof fetchChampions>>;
  rtl?: boolean;
}

const ChampionGrid: React.FC<Props> = ({ champions, rtl = false }) => {
  return (
    <ul className={twMerge('grid grid-cols-2 gap-2', rtl && '[direction:rtl]')}>
      {champions.map((champion) => (
        <li
          key={champion.id}
          className={twMerge('flex items-center w-40 justify-start')}
        >
          <div className={twMerge('relative h-16 w-16 flex-shrink-0')}>
            <Image
              src={`${CHAMPION_IMAGE_ENDPOINT}/${champion.image.full}`}
              alt={`${champion.name} splash art`}
              fill
            />
          </div>
          <h2 className={twMerge('mx-2')}>{champion.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default ChampionGrid;
