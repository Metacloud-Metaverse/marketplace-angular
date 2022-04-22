import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: MarketplacePageComponent },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      { path: 'item-detail', component: ItemDetailPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
