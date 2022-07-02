import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-place-bid-modal',
  templateUrl: './place-bid-modal.component.html',
  styleUrls: ['./place-bid-modal.component.scss']
})
export class PlaceBidModalComponent implements OnInit {

  isLoading = false;
  inputCloud!: FormGroup;
  inputDate!: FormGroup;

  constructor() {
    this.inputDate = new FormGroup({
      dateStart: new FormControl(new Date()),
      dateEnd: new FormControl(new Date()),
    });
  }

  ngOnInit(): void {
  }

}
