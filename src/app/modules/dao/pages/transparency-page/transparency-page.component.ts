import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transparency-page',
  templateUrl: './transparency-page.component.html',
  styleUrls: ['./transparency-page.component.scss']
})
export class TransparencyPageComponent implements OnInit {

  daoCommittee:any = [
    {},{},{},{},{},
  ]

  daoFacilitator:any = [
    {},{}
  ]

  wearableCurationTeam:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Transparency | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
