import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';
import { CreateNameModalComponent } from '../../modals/create-name-modal/create-name-modal.component';

@Component({
  selector: 'app-names-page',
  templateUrl: './names-page.component.html',
  styleUrls: ['./names-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class NamesPageComponent implements OnInit {

  isLoading = false;
  names:any = [
    {},{},{},{},{},
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCreateNameModal(){
    this.dialog.open(CreateNameModalComponent, {
      width: '1000px',
      panelClass: 'modal-create-name'
    });
  }
}
