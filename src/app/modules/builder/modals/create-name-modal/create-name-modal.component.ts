import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-create-name-modal',
  templateUrl: './create-name-modal.component.html',
  styleUrls: ['./create-name-modal.component.scss']
})
export class CreateNameModalComponent implements OnInit {

  name = '';
  isAuthorizate = false;
  mode: ProgressSpinnerMode = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

  onClickAuthorization(){
    if (this.isAuthorizate == true) {
      this.isAuthorizate = false;
    } else {
      this.mode = 'indeterminate';

      setTimeout(() => {
        this.isAuthorizate = true;
        this.mode = 'determinate';
      }, 2000);
    }
  }
}
