import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissionsModalComponent } from '../../modals/permissions-modal/permissions-modal.component';
import { ShareModalComponent } from '../../modals/share-modal/share-modal.component';

export interface LatestsSales {
  name: string;
  location: string;
  dimensions: string;
  highlights: string;
  owner: string;
}

const ELEMENT_DATA: LatestsSales[] = [
  {name: 'Skyscraper Square', location: '-34,10', dimensions: '60 x 85', highlights: 'Road', owner: 'fdldgflkgfdkmdgfkgfdlkfdlkfdgldsf;lgfdl;fdsg'},
  {name: 'meta ArtLabs', location: '-42,35', dimensions: '30 x 50', highlights: 'Road District', owner: '[user_name]'},
  {name: 'Parcel', location: '-58,22', dimensions: '88 x 40', highlights: 'Road Plaza', owner: '[me_user_name]'},
];

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss']
})
export class LandPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'owner', 'location', 'dimensions', 'highlights', 'share'];
  dataSource = ELEMENT_DATA;
  typeView = 0;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openShareModal(){
    this.dialog.open(ShareModalComponent, {
      width: '540px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }

  openPermissionsModal(){
    this.dialog.open(PermissionsModalComponent, {
      width: '600px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }
}
