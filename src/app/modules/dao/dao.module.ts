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
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProposalsPageComponent } from './pages/proposals-page/proposals-page.component';
import { ProposalDetailPageComponent } from './pages/proposal-detail-page/proposal-detail-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';
import { VotingPowerPageComponent } from './pages/voting-power-page/voting-power-page.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { StartProposalPageComponent } from './pages/start-proposal-page/start-proposal-page.component';
import { StartProposalCommunityPageComponent } from './pages/start-proposal-community-page/start-proposal-community-page.component';
import { StartProposalCatalystPageComponent } from './pages/start-proposal-catalyst-page/start-proposal-catalyst-page.component';
import { StartProposalPoiPageComponent } from './pages/start-proposal-poi-page/start-proposal-poi-page.component';
import { StartProposalNamebanPageComponent } from './pages/start-proposal-nameban-page/start-proposal-nameban-page.component';
import { StartProposalGrantPageComponent } from './pages/start-proposal-grant-page/start-proposal-grant-page.component';

// Components
import { ProposalCardComponent } from './components/proposal-card/proposal-card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { VotesModalComponent } from './modals/votes-modal/votes-modal.component';

// Layouts
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProposalDetailPageComponent,
    TransparencyPageComponent,
    ProposalsPageComponent,
    VotingPowerPageComponent,
    ActivityPageComponent,
    ProposalCardComponent,
    CommentCardComponent,
    VotesModalComponent,
    StartProposalPageComponent,
    StartProposalCommunityPageComponent,
    StartProposalCatalystPageComponent,
    StartProposalPoiPageComponent,
    StartProposalNamebanPageComponent,
    StartProposalGrantPageComponent,
    MainLayoutComponent,
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
    MatDividerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
  ]
})
export class DaoModule { }
