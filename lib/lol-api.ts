export const CHAMPION_ENDPOINT =
  'https://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json';

export const CHAMPION_IMAGE_ENDPOINT =
  'https://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion';

import { cache } from 'react';

export const fetchChampions = cache(async () => {
  console.log('bobby');
  const response = await fetch(CHAMPION_ENDPOINT);
  const data = await response.json();
  const champions = data.data as Record<
    string,
    {
      id: string;
      key: string;
      name: string;
      title: string;
      blurb: string;
      info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
      };
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
      tags: number[];
    }
  >;

  return Object.values(champions);
});
