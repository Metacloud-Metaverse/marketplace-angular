import { Component, OnInit } from '@angular/core';
import { ComponentAnimation } from 'src/app/modules/mc-core/animations/component.animation';

@Component({
  selector: 'app-avatars-page',
  templateUrl: './avatars-page.component.html',
  styleUrls: ['./avatars-page.component.scss'],
  animations: [ComponentAnimation.componentAnimation]
})
export class AvatarsPageComponent implements OnInit {

  avatars:any = [
    {},{},{}
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
