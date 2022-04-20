import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  filterActive = 0;

  events:any = [
    {
      image: '',
      title: 'Alison Wonderland’s  WonderQuest #4: WonderSound',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'asdsadsadsa',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'zxczczxc',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'dgflksjlkgjslf;s;ldjfk',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'Alison Wonderland’s  WonderQuest #4: WonderSound',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'Alison Wonderland’s  WonderQuest #4: WonderSound',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
    {
      image: '',
      title: 'Alison Wonderland’s  WonderQuest #4: WonderSound',
      date: '2021-12-04',
      organized: 'Wonder Quest',
      creator: 'Metacloud',
      location: '-67,101',
      coordinates: '-67,101',
      status: 0,
    },
  ]

  @ViewChild('sectionBigCards', {read: DragScrollComponent}) ds!: DragScrollComponent;

  constructor() { }

  ngOnInit(): void {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
