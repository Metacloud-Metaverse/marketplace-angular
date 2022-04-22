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



// Pages
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

// Components
import { ItemCardComponent } from './components/item-card/item-card.component';


@NgModule({
  declarations: [
    ItemDetailPageComponent,
    MainPageComponent,
    ItemCardComponent,
    SearchPageComponent,
    MarketplacePageComponent
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
  ]
})
export class MarketplaceModule { }
