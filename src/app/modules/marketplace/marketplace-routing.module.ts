import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'item-detail', component: ItemDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
