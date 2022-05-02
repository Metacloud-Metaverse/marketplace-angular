import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';
import { CreateSceneModalComponent } from '../../modals/create-scene-modal/create-scene-modal.component';
import { DeleteSceneModalComponent } from '../../modals/delete-scene-modal/delete-scene-modal.component';
import { ImportSceneModalComponent } from '../../modals/import-scene-modal/import-scene-modal.component';

@Component({
  selector: 'app-scenes-page',
  templateUrl: './scenes-page.component.html',
  styleUrls: ['./scenes-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class ScenesPageComponent implements OnInit {

  scenes:any = [
    {},{},{},{},{},
  ]
  poolScenes:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCreateSceneModal(){
    this.dialog.open(CreateSceneModalComponent, {
      width: '720px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }

  openImportSceneModal(){
    this.dialog.open(ImportSceneModalComponent, {
      width: '646px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }
}
