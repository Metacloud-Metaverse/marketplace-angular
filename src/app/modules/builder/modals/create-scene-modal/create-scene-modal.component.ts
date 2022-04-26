import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-scene-modal',
  templateUrl: './create-scene-modal.component.html',
  styleUrls: ['./create-scene-modal.component.scss']
})
export class CreateSceneModalComponent implements OnInit {

  step = 0;

  rows = 3;
  columns = 4;
  isError = false;

  rows2:any = [{},{},{},];
  columns2:any = [{},{},{},{},];

  constructor() { }

  ngOnInit(): void {
  }

}
