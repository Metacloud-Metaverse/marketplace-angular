import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  item:  string;
  time:  string;
  buyer: string;
  type:  string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Item_name_9', time: '11/12/2021', buyer: 'buyer_name_9', type: 'type_9', price: 55},
  {item: 'Item_name_8', time: '11/12/2021', buyer: 'buyer_name_8', type: 'type_8', price: 12},
  {item: 'Item_name_7', time: '11/12/2021', buyer: 'buyer_name_7', type: 'type_7', price: 1},
  {item: 'Item_name_6', time: '11/12/2021', buyer: 'buyer_name_6', type: 'type_6', price: 32},
  {item: 'Item_name_5', time: '11/12/2021', buyer: 'buyer_name_5', type: 'type_5', price: 46},
  {item: 'Item_name_4', time: '11/12/2021', buyer: 'buyer_name_4', type: 'type_4', price: 29},
  {item: 'Item_name_3', time: '11/12/2021', buyer: 'buyer_name_3', type: 'type_3', price: 78},
  {item: 'Item_name_2', time: '11/12/2021', buyer: 'buyer_name_2', type: 'type_2', price: 34},
  {item: 'Item_name_1', time: '11/12/2021', buyer: 'buyer_name_1', type: 'type_1', price: 5},
];

@Component({
  selector: 'app-my-sales-page',
  templateUrl: './my-sales-page.component.html',
  styleUrls: ['./my-sales-page.component.scss']
})
export class MySalesPageComponent implements OnInit {

  displayedColumns: string[] = ['item', 'time', 'buyer', 'type', 'price'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
