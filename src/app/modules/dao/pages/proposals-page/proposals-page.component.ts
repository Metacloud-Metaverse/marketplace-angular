import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-proposals-page',
  templateUrl: './proposals-page.component.html',
  styleUrls: ['./proposals-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class ProposalsPageComponent implements OnInit {

  filterActive = 0;
  filterstatus = 0;
  filterTimeframe = 0;
  sort = 0;
  isLoading = false;
  openFiltersMobile = false;
  proposals:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
  ]

  slice = 12;

  constructor() { }

  ngOnInit(): void {
  }

  loadMoreProposals(){
    this.slice = this.slice + 10;
  }
}
