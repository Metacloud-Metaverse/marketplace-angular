import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrls: ['./proposal-card.component.scss']
})
export class ProposalCardComponent implements OnInit {

  title = 'Should Events announcements be limited to 1 day or less at a time to be considered "Happening now"??';
  description = 'Leading: Yes, add limits to length events.';
  timeframe = 4;
  category = 0;
  status = 0;
  isImportant = true;
  isEnded = false;
  addWatchlist = false;

  showCurrentResult = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
