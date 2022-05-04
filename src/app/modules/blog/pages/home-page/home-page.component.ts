import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class HomePageComponent implements OnInit {

  articles:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]
  isLoading = false;
  slice = 10;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blog | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

  loadMoreComments(){
    this.slice = this.slice + 10;
  }
}
