import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene-detail-page',
  templateUrl: './scene-detail-page.component.html',
  styleUrls: ['./scene-detail-page.component.scss']
})
export class SceneDetailPageComponent implements OnInit {

  title = 'Museum pierorajon';
  description = 'A modern 3 level villa designed with high ceilings and full height windows';
  image = '/assets/img/scene-image-preview.png';
  size = '64x64m';
  creator = 'BlockArchitect#3c1e';
  likes = 32;
  isLiked = false;

  constructor() { }

  ngOnInit(): void {
  }
}
