import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voting-power-page',
  templateUrl: './voting-power-page.component.html',
  styleUrls: ['./voting-power-page.component.scss']
})
export class VotingPowerPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Voting Power | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
