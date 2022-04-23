import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { McCoreModule } from '../mc-core/mc-core.module';

// Angular Material
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// Pages
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    McCoreModule,

    // Angular Material
    ClipboardModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class ProfileModule { }
