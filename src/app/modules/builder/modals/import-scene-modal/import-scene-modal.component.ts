import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-scene-modal',
  templateUrl: './import-scene-modal.component.html',
  styleUrls: ['./import-scene-modal.component.scss']
})
export class ImportSceneModalComponent implements OnInit {

  files: any = [
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 1,
    },
    {
      name: 'G808_HARROW.zip',
      status: 0,
    },
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 0,
    },
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 0,
    },
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 0,
    },
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 0,
    },
    {
      name: 'Meta Cloud - Interno assets export example',
      status: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
