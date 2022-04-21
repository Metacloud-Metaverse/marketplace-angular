import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-detail-page',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.scss']
})
export class ItemDetailPageComponent implements OnInit {

  @Input() item?: any;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Item Detail | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: 'Pornland is the first metaverse designed to provide safe, secure and private virtual-reality venues for adult entertainment and real-life sexual fun.' }
    );
  }

}
