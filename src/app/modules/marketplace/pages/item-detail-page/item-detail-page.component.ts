import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface LatestsSales {
  from: string; to: string; type: string; when: string; price: number;
}

export interface Bids {
  from: string; timeleft: string; price: number;
}

const ELEMENT_DATA: LatestsSales[] = [
  {from: '0xdf5e', to: 'flash', type: 'Bid', when: '11/12/2021', price: 55},
  {from: '0xdf5e', to: 'flash', type: 'Listings', when: '11/12/2021', price: 55},
];

const ELEMENT_DATA2: Bids[] = [
  {from: 'Chamaster055', timeleft: '28 Days', price: 55},
  {from: 'SteviewKing1276', timeleft: '28 Days', price: 55},
];

@Component({
  selector: 'app-item-detail-page',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.scss']
})
export class ItemDetailPageComponent implements OnInit {

  displayedColumns: string[] = ['from', 'to', 'type', 'when', 'price'];
  displayedColumns2: string[] = ['from', 'timeleft', 'price'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;

  // 0 = Land
  // 1 = Estate || Bid
  // 2 = Item   || Quantity
  // 3 = Name   || Bid
  typeItem = 0;
  isBid = false;

  @Input() item?: any;

  parcels:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('[Item_name] | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
