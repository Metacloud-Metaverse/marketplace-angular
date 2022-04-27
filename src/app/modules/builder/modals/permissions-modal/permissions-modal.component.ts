import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss']
})
export class PermissionsModalComponent implements OnInit {

  usersInvited:any = [
    {},{},{},{},{},{},{},{},{},{},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
