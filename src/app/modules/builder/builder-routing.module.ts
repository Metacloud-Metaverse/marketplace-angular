import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AvatarPageComponent } from './pages/avatar-page/avatar-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { LandPageComponent } from './pages/land-page/land-page.component';
import { NamesPageComponent } from './pages/names-page/names-page.component';
import { SceneDetailPageComponent } from './pages/scene-detail-page/scene-detail-page.component';
import { ScenesPageComponent } from './pages/scenes-page/scenes-page.component';
import { ScenesPoolPageComponent } from './pages/scenes-pool-page/scenes-pool-page.component';
import { WearablesPageComponent } from './pages/wearables-page/wearables-page.component';

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
      { path: 'avatar', component: AvatarPageComponent },
      { path: 'items', component: ItemsPageComponent },
      { path: 'wearables', component: WearablesPageComponent },
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
