import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  avatar = '/assets/img/avatar.png';
  name = 'Roots';
  comment = 'To clarify, I am all for multiple day events but events lasting more than 1 day should have an announcement for each day or segment of the event. There should be activity and event organizers present for length of the advertised event.'
  date = '11/12/2021';

  constructor() { }

  ngOnInit(): void {
  }

}
