import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class UserPageComponent implements OnInit {

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
    this.titleService.setTitle('[User_name] | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

  loadMoreComments(){
    this.slice = this.slice + 10;
  }
}
