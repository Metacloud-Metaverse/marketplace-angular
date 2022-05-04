import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-start-proposal-page',
  templateUrl: './start-proposal-page.component.html',
  styleUrls: ['./start-proposal-page.component.scss']
})
export class StartProposalPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Create Proposal | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
