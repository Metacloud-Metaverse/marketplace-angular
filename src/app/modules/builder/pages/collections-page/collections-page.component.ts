import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';
import { CreateCollectionModalComponent } from '../../modals/create-collection-modal/create-collection-modal.component';
import { CreateItemModalComponent } from '../../modals/create-item-modal/create-item-modal.component';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
  styleUrls: ['./collections-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class CollectionsPageComponent implements OnInit {

  isLoading = false;
  isListView = false;
  collections:any = [
    {},{},{},{},{},{},{},{},
  ]

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
