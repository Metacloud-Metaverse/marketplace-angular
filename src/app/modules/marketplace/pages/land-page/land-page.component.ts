import { Component, OnInit } from '@angular/core';
import { ComponentAnimation, LeaveComponentBlur } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation, LeaveComponentBlur.leaveComponentBlur]
})
export class LandPageComponent implements OnInit {

  isMapActive = false;
  isFiltersActive = false;
  sortBy = 0;
  itemSlice = 16;
  isLoading = false;
  items:any = [
    {
      type: 0,
      title: "Sydney’s House",
      genre: 2,
      photoMiniature: '/assets/img/map-preview.png',
      rarity: 0,
      clothes: 7,
      coordinates: [-48, -87],
    },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
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
    this.items
  }

  loadMoreItems(){
    this.itemSlice = this.itemSlice + 12;
  }
}
