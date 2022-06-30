import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Item } from '../../entities/item';

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

  isBid = false;
  showItem = true;

  @Input() item?: Item;

  parcels:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('[Item_name] | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );

    this.item = new Item();
    this.item.type = 2;
    this.item.title = '[Item_name]';
    this.item.genre = 2;
    this.item.photo = '/assets/img/item-wearable.png';
    this.item.modelItem = '/assets/models/Character_Male_Babucha.glb';
    this.item.modelWear = '/assets/models/CharacterMaleBlender.glb';
    this.item.rarity = 0;
    this.item.clothes = 7;
    this.item.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rem veritatis cumque repudiandae! Tenetur commodi exercitationem explicabo ducimus adipisci, mollitia repellat magnam, iure dolores fuga ad. Corrupti pariatur aperiam, delectus, autem dolor nisi ipsam repudiandae.';
    this.item.creatorName = 'SHAWNDA0505LYDS';
    this.item.creatorAvatar = '/assets/img/avatar.png';
    this.item.creatorUrl = '[Item_name]';

    this.item.collectionName = 'Mercenary Cyber Colections';
    this.item.collectionAvatar = '/assets/img/collection-icon.png';
    this.item.collectionUrl = '[Item_name]';

    this.item.currentMint = 15;
  }
}
