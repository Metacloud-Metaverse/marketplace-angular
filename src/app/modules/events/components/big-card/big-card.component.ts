import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  image = 'https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80';
  title = 'Alison Wonderland’s WonderQuest #4: WonderSound';
  organized = 'Wonder Quest';
  creator = 'Metacloud';
  coordinates = '-67,101';
  status = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
