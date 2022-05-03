import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss']
})
export class CreateEventPageComponent implements OnInit {

  eventCover = '';
  inputDate!: FormGroup;
  inputTime!: FormGroup;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.inputDate = new FormGroup({
      dateStart: new FormControl(new Date(year, month, 13)),
      dateEnd: new FormControl(new Date(year, month, 16)),
    });

    this.inputTime = new FormGroup({
      timeStart: new FormControl(new Date(year, month, 13)),
      timeEnd: new FormControl(new Date(year, month, 16)),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Create new Event | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

}
