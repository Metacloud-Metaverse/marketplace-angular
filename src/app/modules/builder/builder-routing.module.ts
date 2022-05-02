import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AvatarsPageComponent } from './pages/avatars-page/avatars-page.component';
import { CollectionDetailPageComponent } from './pages/collection-detail-page/collection-detail-page.component';
import { CollectionsPageComponent } from './pages/collections-page/collections-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { LandPageComponent } from './pages/land-page/land-page.component';
import { NamesPageComponent } from './pages/names-page/names-page.component';
import { SceneDetailPageComponent } from './pages/scene-detail-page/scene-detail-page.component';
import { ScenesPageComponent } from './pages/scenes-page/scenes-page.component';
import { ScenesPoolPageComponent } from './pages/scenes-pool-page/scenes-pool-page.component';

const routes: Routes = [
  /* { path: '', component: MainLayoutComponent }, */
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'scenes', component: ScenesPageComponent },
      { path: 'scenes/pools', component: ScenesPoolPageComponent },
      { path: 'scenes/scene-detail', component: SceneDetailPageComponent },
      { path: 'land', component: LandPageComponent },
      { path: 'avatars', component: AvatarsPageComponent },
      { path: 'collections', component: CollectionsPageComponent },
      { path: 'collection-detail', component: CollectionDetailPageComponent },
      { path: 'names', component: NamesPageComponent },
      { path: '', redirectTo: 'scenes', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
