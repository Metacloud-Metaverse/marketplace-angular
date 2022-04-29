import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  avatar: string;
  voter: string;
  voted: number;
  vp: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 360 },
  { voter: 'Lorem', avatar: '/assets/img/avatar.png', voted: 1, vp: 2 },
  { voter: 'Lorem ipsum', avatar: '/assets/img/avatar.png', voted: 1, vp: 120 },
  { voter: 'Sit Amet', avatar: '/assets/img/avatar.png', voted: 0, vp: 750 },
  { voter: 'Roots', avatar: '/assets/img/avatar.png', voted: 0, vp: 135 },
];

@Component({
  selector: 'app-votes-modal',
  templateUrl: './votes-modal.component.html',
  styleUrls: ['./votes-modal.component.scss']
})
export class VotesModalComponent implements OnInit {

  displayedColumns: string[] = ['voter', 'voted', 'vp'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
