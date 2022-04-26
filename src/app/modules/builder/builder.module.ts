import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuilderRoutingModule } from './builder-routing.module';
import { McCoreModule } from '../mc-core/mc-core.module';
import { DragScrollModule } from 'ngx-drag-scroll';

// Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

// Pages
import { LandPageComponent } from './pages/land-page/land-page.component';
import { ScenesPageComponent } from './pages/scenes-page/scenes-page.component';
import { AvatarPageComponent } from './pages/avatar-page/avatar-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { NamesPageComponent } from './pages/names-page/names-page.component';
import { WearablesPageComponent } from './pages/wearables-page/wearables-page.component';

// Components
import { SceneCardComponent } from './components/scene-card/scene-card.component';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Modals
import { CreateSceneModalComponent } from './modals/create-scene-modal/create-scene-modal.component';
import { ImportSceneModalComponent } from './modals/import-scene-modal/import-scene-modal.component';
import { DeleteSceneModalComponent } from './modals/delete-scene-modal/delete-scene-modal.component';
import { ScenesPoolPageComponent } from './pages/scenes-pool-page/scenes-pool-page.component';
import { SceneDetailPageComponent } from './pages/scene-detail-page/scene-detail-page.component';


@NgModule({
  declarations: [
    LandPageComponent,
    ScenesPageComponent,
    AvatarPageComponent,
    ItemsPageComponent,
    NamesPageComponent,
    WearablesPageComponent,
    MainLayoutComponent,
    CreateSceneModalComponent,
    ImportSceneModalComponent,
    DeleteSceneModalComponent,
    SceneCardComponent,
    ScenesPoolPageComponent,
    SceneDetailPageComponent,
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    McCoreModule,
    FormsModule,
    DragScrollModule,

    // Angular Material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BuilderModule { }
