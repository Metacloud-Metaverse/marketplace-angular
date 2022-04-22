import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MyStoreLayoutComponent } from './layouts/my-store-layout/my-store-layout.component';
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { MyBidsPageComponent } from './pages/my-bids-page/my-bids-page.component';
import { MyOnsalePageComponent } from './pages/my-onsale-page/my-onsale-page.component';
import { MySalesPageComponent } from './pages/my-sales-page/my-sales-page.component';
import { MySettingsPageComponent } from './pages/my-settings-page/my-settings-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: MarketplacePageComponent },
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      { path: 'item-detail', component: ItemDetailPageComponent },
      { path: 'search', component: SearchPageComponent },
      {
        path: 'my-store',
        component: MyStoreLayoutComponent,
        children: [
          { path: 'onsale', component: MyOnsalePageComponent },
          { path: 'sales', component: MySalesPageComponent },
          { path: 'bids', component: MyBidsPageComponent },
          { path: 'settings', component: MySettingsPageComponent },
          { path: '', redirectTo: 'sales', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'search', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
