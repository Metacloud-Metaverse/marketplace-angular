import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCollectionModalComponent } from '../../modals/create-collection-modal/create-collection-modal.component';
import { CreateItemModalComponent } from '../../modals/create-item-modal/create-item-modal.component';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit {

  typeView = 0;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCreateCollectionModal(){
    this.dialog.open(CreateCollectionModalComponent, {
      width: '600px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }

  openCreateItemModal(){
    this.dialog.open(CreateItemModalComponent, {
      width: '700px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }
}