import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-collection-modal',
  templateUrl: './create-collection-modal.component.html',
  styleUrls: ['./create-collection-modal.component.scss']
})
export class CreateCollectionModalComponent implements OnInit {

  isCreateMode = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
