import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenes-pool-page',
  templateUrl: './scenes-pool-page.component.html',
  styleUrls: ['./scenes-pool-page.component.scss']
})
export class ScenesPoolPageComponent implements OnInit {

  isLoading = false;

  filter = 0;
  sort = 0;

  sceneUniverse:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
