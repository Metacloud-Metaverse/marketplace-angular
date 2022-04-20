import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() isTrendingCard = false;
  isLive = false;

  image = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  title = 'Unboxing of the One Plus 10 Pro 5G in the Metaverse';
  date = 'NOW';
  coordinates = '-67,101';

  constructor() { }

  ngOnInit(): void {
  }

}
