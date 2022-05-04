import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  @Input() title = 'CATEGORIES';

  filterCategory = 0;
  itemSlice = 16;
  items:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  @Input() data: any[] = [
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

}
