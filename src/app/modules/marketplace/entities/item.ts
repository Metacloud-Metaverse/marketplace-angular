
export class Item {
  id!: number;
  title!: string;
  photo!: string;
  rarity: number = 2;
  // 0 MYTHIC
  // 1 UNCOMMON
  // 2 UNIQUE
  // 3 LEGENDARY
  // 4 EPIC
  // 5 UNUSUAL
  // 6 ODD
  // 7 RARE
  genre!: number;
  // 0 FEMALE
  // 1 MALE
  cloud!: number;
  coordinates!: string;
  lands!: number;


  static ITEMS = [
    {
      id: 0,
      title: 'JEWEL Power75 sadlksjal dkjalksa djlsakdjlk',
      genre: 0,
      rarity: 0,
    },
    {
      id: 1,
      title: 'JEWEL Power75',
      genre: 1,
      rarity: 1,
    },
    {
      id: 2,
      title: 'cxzccxzcxzcxcxzcxzqew',
      genre: 1,
      rarity: 2,
    },
    {
      id: 3,
      title: 'adscxzdacwa',
      genre: 0,
      rarity: 3,
    },
    {
      id: 4,
      title: 'adsweqcdaew',
      genre: 0,
      rarity: 4,
    },
    {
      id: 5,
      title: 'adsweqcdaew',
      genre: 0,
      rarity: 5,
    },
    {
      id: 6,
      title: 'adsweqcdaew',
      genre: 0,
      rarity: 6,
    },
    {
      id: 7,
      title: 'adsweqcdaew',
      genre: 1,
      rarity: 7,
    },
    {
      id: 8,
      title: 'adsweqcdaew',
      genre: 1,
      rarity: 8,
    },
  ];
}

