import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class SearchPageComponent implements OnInit {

  filterType = 0;
  filterCategory = 0;
  filterGenreFemale = false;
  filterGenreMale = false;
  rarityRegultarActive = true;
  rarityLegendaryActive = true;
  rarityOddActive = true;
  rarityEpicActive = true;
  rarityMythicActive = true;
  rarityUnusualActive = true;
  rarityUniqueActive = true;
  sortBy = 0;
  itemSlice = 16;

  isLoading = false;

  items:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  categories: any[] = [
    {
      title: 'Wearables',
      icon: 'travel_explore',
      isExpanded: true,
      links: [
        {
          title: 'Head',
          type: 1,
          links: [
            { title: 'Facial Hair', type: 0 },
            { title: 'Hair', type: 0 },
            { title: 'Eyes', type: 0 },
            { title: 'Eyebrows', type: 0 },
            { title: 'Mouth', type: 0 },
          ]
        },
        { title: 'UpperBody', url: 'upper', type: 0 },
        { title: 'Lower Body', url: 'faq', type: 0 },
        {
          title: 'Accesories',
          type: 1,
          links: [
            { title: 'Earring', type: 0 },
            { title: 'Eyewear', type: 0 },
            { title: 'Hat', type: 0 },
            { title: 'Helmet', type: 0 },
            { title: 'Mask', type: 0 },
            { title: 'Tiara', type: 0 },
            { title: 'Top Head', type: 0 },
          ]
        },
        { title: 'Skins', type: 0 },
      ],
    },
    {
      title: 'Emotes',
      icon: 'mood',
      isExpanded: false,
    },
    {
      title: 'Names',
      icon: 'draw',
      isExpanded: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadMoreItems(){
    this.itemSlice = this.itemSlice + 12;
  }
}
