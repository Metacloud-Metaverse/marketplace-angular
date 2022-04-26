import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteSceneModalComponent } from '../../modals/delete-scene-modal/delete-scene-modal.component';

@Component({
  selector: 'app-scene-card',
  templateUrl: './scene-card.component.html',
  styleUrls: ['./scene-card.component.scss']
})
export class SceneCardComponent implements OnInit {

  title = 'Museum pierorajon';
  description = 'A modern 3 level villa designed with high ceilings and full height windows';
  image = '/assets/img/scene-image-preview.png';
  size = '64x64m';

  @Input() isEditMode = false;
  @Input() isMinimized = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDeleteSceneModal(){
    this.dialog.open(DeleteSceneModalComponent, {
      width: '646px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }
}
