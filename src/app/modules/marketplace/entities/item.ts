
export class Item {
  id!: number;
  title!: string;
  photo!: string;
  modelWear!: string;
  modelItem!: string;
  description!: string;

  creatorName!: string;
  creatorAvatar!: string;
  creatorUrl!: string;

  collectionName!: string;
  collectionAvatar!: string;
  collectionUrl!: string;

  rarity: number = 2;
  // 0 COMMON    || "Max supply: 100,000"
  // 1 UNUSUAL   || "Max supply: 50,000"
  // 2 ODD       || "Max supply: 10,000"
  // 3 RARE      || "Max supply: 5000"
  // 4 EPIC      || "Max supply: 1000"
  // 5 LEGENDARY || "Max supply: 100"
  // 6 MYTHIC    || "Max supply: 10"
  // 7 UNIQUE    || "Max supply: 1"

  genre: number = 0;
  // 0 FEMALE
  // 1 MALE
  // 2 BOTH or UNISEX

  clothes: number = 0;
  // Sort like you prefer

  coordinates!: string;
  lands!: number;

  type: number = 0;
  // 0 = LAND
  // 1 = ESTATE || Bid
  // 2 = ITEM   || Quantity || Image or 3D
  // 3 = NAME   || Bid

  currentMint!: number;

  static ITEMS = [
    {
      id: 0,
      title: 'JEWEL Power75 sadlksjal dkjalksa djlsakdjlk',
      genre: 0,
      rarity: 0,
      coordinates: '-67, 101',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 1,
      title: 'JEWEL Power75',
      genre: 1,
      rarity: 1,
      coordinates: '-67, 101',
      image: '',
      name: 'di CAPRIO'
    },
    {
      id: 2,
      title: 'cxzccxzcxzcxcxzcxzqew',
      genre: 2,
      rarity: 2,
      coordinates: '-67, 101',
    },
    {
      id: 3,
      title: 'adscxzdacwa',
      genre: 0,
      rarity: 3,
      coordinates: '-67, 101',
    },
    {
      id: 4,
      title: 'adsweqcdaew',
      genre: 0,
      rarity: 4,
      coordinates: '-67, 101',
    },
    {
      id: 5,
      title: 'adsweqcdaew',
      genre: 0,
      rarity: 5,
      coordinates: '-67, 101',
    },
    {
      id: 6,
      title: 'adsweqcdaew',
      genre: 2,
      rarity: 6,
      coordinates: '-67, 101',
    },
    {
      id: 7,
      title: 'adsweqcdaew',
      genre: 1,
      rarity: 7,
      coordinates: '-67, 101',
    },
    {
      id: 8,
      title: 'adsweqcdaew',
      genre: 1,
      rarity: 8,
      coordinates: '-67, 101',
    },
  ];
}

