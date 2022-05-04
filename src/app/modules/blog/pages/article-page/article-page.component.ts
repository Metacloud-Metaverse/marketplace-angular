import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  title = 'Metacloud Security Update';
  description = 'The beta version of Metacloud’s Desktop Client has been getting better thanks to YOUR help, so we’re bringing it to the Metacloud launch page!';
  topic = 0;
  date = '11/12/2022';
  creator = 'Metacloud';

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('[article_name] | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
