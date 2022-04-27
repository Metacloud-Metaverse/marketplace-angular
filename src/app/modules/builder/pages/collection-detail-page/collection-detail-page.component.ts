import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';
import { CreateCollectionModalComponent } from '../../modals/create-collection-modal/create-collection-modal.component';
import { CreateItemModalComponent } from '../../modals/create-item-modal/create-item-modal.component';

@Component({
  selector: 'app-collection-detail-page',
  templateUrl: './collection-detail-page.component.html',
  styleUrls: ['./collection-detail-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class CollectionDetailPageComponent implements OnInit {

  isLoading = false;
  showAlert = true;
  items:any = [
    {},{},{},{},{},{},{},{},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSaveCollectionModal(){
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
