import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../entities/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item?: any;

  constructor() { }

  ngOnInit(): void {
  }
}
