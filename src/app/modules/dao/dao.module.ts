import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaoRoutingModule } from './dao-routing.module';
import { McCoreModule } from '../mc-core/mc-core.module';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProposalsPageComponent } from './pages/proposals-page/proposals-page.component';
import { ProposalDetailPageComponent } from './pages/proposal-detail-page/proposal-detail-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';
import { VotingPowerPageComponent } from './pages/voting-power-page/voting-power-page.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { CreateProposalPageComponent } from './pages/create-proposal-page/create-proposal-page.component';

// Components
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProposalDetailPageComponent,
    TransparencyPageComponent,
    ProposalsPageComponent,
    VotingPowerPageComponent,
    ActivityPageComponent,
    CreateProposalPageComponent,
    ProposalCardComponent,
  ],
  imports: [
    CommonModule,
    DaoRoutingModule,
    McCoreModule,

    // Angular Material
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class DaoModule { }
