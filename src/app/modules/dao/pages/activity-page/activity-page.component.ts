import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class ActivityPageComponent implements OnInit {

  filterActive = 0;
  sortBy = 0;
  isLoading = false;

  myProposals:any = [
    {},{},{},{},{},
  ]

  myWatchlist:any = [
  ]

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

}
