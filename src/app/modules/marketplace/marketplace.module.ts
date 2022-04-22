import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { McCoreModule } from '../mc-core/mc-core.module';
import { DragScrollModule } from 'ngx-drag-scroll';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

// Pages
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MySalesPageComponent } from './pages/my-sales-page/my-sales-page.component';

// Components
import { ItemCardComponent } from './components/item-card/item-card.component';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MyStoreLayoutComponent } from './layouts/my-store-layout/my-store-layout.component';
import { MyBidsPageComponent } from './pages/my-bids-page/my-bids-page.component';
import { MySettingsPageComponent } from './pages/my-settings-page/my-settings-page.component';
import { MyOnsalePageComponent } from './pages/my-onsale-page/my-onsale-page.component';


@NgModule({
  declarations: [
    ItemDetailPageComponent,
    ItemCardComponent,
    SearchPageComponent,
    MarketplacePageComponent,
    MainLayoutComponent,
    MyStoreLayoutComponent,
    MySalesPageComponent,
    MyBidsPageComponent,
    MySettingsPageComponent,
    MyOnsalePageComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    McCoreModule,
    DragScrollModule,

    // Angular Material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule,
    MatTableModule,
  ]
})
export class MarketplaceModule { }
