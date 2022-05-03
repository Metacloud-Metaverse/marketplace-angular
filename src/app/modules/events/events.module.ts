import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClipboardModule } from '@angular/cdk/clipboard';


// Pages
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';


// Components
import { BigCardComponent } from './components/big-card/big-card.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ButtonsActionShareElementComponent } from './components/buttons-action-share-element/buttons-action-share-element.component';


@NgModule({
  declarations: [
    EventsPageComponent,
    CreateEventPageComponent,
    BigCardComponent,
    EventCardComponent,
    ButtonsActionShareElementComponent,
    EventDetailPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    ClipboardModule,
  ]
})
export class EventsModule { }
