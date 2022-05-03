import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: 'event', component: EventDetailPageComponent },
  { path: 'create-event', component: CreateEventPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
