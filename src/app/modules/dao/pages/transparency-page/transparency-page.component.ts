import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparency-page',
  templateUrl: './transparency-page.component.html',
  styleUrls: ['./transparency-page.component.scss']
})
export class TransparencyPageComponent implements OnInit {

  daoCommittee:any = [
    {},{},{},{},{},
  ]

  daoFacilitator:any = [
    {},{}
  ]

  wearableCurationTeam:any = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
