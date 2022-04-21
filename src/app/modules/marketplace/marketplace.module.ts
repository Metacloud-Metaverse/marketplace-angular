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


// Pages
import { ItemDetailPageComponent } from './pages/item-detail-page/item-detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

// Components
import { ItemCardComponent } from './components/item-card/item-card.component';


@NgModule({
  declarations: [
    ItemDetailPageComponent,
    MainPageComponent,
    ItemCardComponent
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
  ]
})
export class MarketplaceModule { }
