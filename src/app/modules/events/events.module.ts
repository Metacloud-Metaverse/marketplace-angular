import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';

// Pages
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Components


@NgModule({
  declarations: [
    EventsPageComponent,
    EventPageComponent,
    CreateEventPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,

    // Angular Material
    MatButtonModule,
    MatIconModule
  ]
})
export class EventsModule { }
