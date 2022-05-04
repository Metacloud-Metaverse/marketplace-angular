import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Activity | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

}
