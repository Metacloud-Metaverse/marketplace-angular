import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  isAuthorizate = false;
  spinnerMode = 'determinate';
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
