import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/mc-core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      /* { path: '', loadChildren: () => import('./modules/intro/intro.module').then(m => m.IntroModule), data: { preload: true }}, */
      { path: 'marketplace', loadChildren: () => import('./modules/marketplace/marketplace.module').then(m => m.MarketplaceModule), data: { preload: true }},
      { path: 'builder', loadChildren: () => import('./modules/builder/builder.module').then(m => m.BuilderModule), data: { preload: true }},
      { path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule), data: { preload: true }},
      { path: 'dao', loadChildren: () => import('./modules/dao/dao.module').then(m => m.DaoModule), data: { preload: true }},
      { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule), data: { preload: true }},
      { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), data: { preload: true }},
    ]
  },
  /* { path: '', redirectTo: '', pathMatch: 'full' }, */
  /* { path: 'page-not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule), data: { preload: true }}, */
  /* { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
