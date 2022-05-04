import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class LandPageComponent implements OnInit {

  typeView = 0;
  sortBy = 0;
  itemSlice = 16;
  isLoading = false;
  items:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  listCategory: any[] = [
    {
      title: 'Land',
      icon: 'travel_explore',
      isExpanded: true,
      links: [
        { title: 'Parcels', url: '', type: 0 },
        { title: 'Estates', url: '', type: 0 },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadMoreItems(){
    this.itemSlice = this.itemSlice + 12;
  }
}
