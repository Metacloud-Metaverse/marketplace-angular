import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


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
import { LandPageComponent } from './pages/land-page/land-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceBidModalComponent } from './modals/place-bid-modal/place-bid-modal.component';


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
    MyOnsalePageComponent,
    LandPageComponent,
    PlaceBidModalComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    McCoreModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,

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
    MatButtonToggleModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MarketplaceModule { }
