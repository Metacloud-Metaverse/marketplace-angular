import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/mc-core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      /* { path: '', loadChildren: () => import('./modules/intro/intro.module').then(m => m.IntroModule), data: { preload: true }}, */
      { path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule), data: { preload: true }},
    ]
  }
  /* { path: '', redirectTo: '', pathMatch: 'full' }, */
  /* { path: 'page-not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule), data: { preload: true }}, */
  /* { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
