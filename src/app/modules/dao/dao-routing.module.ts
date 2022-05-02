import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProposalDetailPageComponent } from './pages/proposal-detail-page/proposal-detail-page.component';
import { ProposalsPageComponent } from './pages/proposals-page/proposals-page.component';
import { StartProposalCatalystPageComponent } from './pages/start-proposal-catalyst-page/start-proposal-catalyst-page.component';
import { StartProposalCommunityPageComponent } from './pages/start-proposal-community-page/start-proposal-community-page.component';
import { StartProposalGrantPageComponent } from './pages/start-proposal-grant-page/start-proposal-grant-page.component';
import { StartProposalNamebanPageComponent } from './pages/start-proposal-nameban-page/start-proposal-nameban-page.component';
import { StartProposalPageComponent } from './pages/start-proposal-page/start-proposal-page.component';
import { StartProposalPoiPageComponent } from './pages/start-proposal-poi-page/start-proposal-poi-page.component';
import { TransparencyPageComponent } from './pages/transparency-page/transparency-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'proposals', component: ProposalsPageComponent },
  { path: 'proposals/proposal-detail', component: ProposalDetailPageComponent },
  { path: 'proposals/start-proposal', component: StartProposalPageComponent },
  { path: 'proposals/start-proposal/community-poll', component: StartProposalCommunityPageComponent },
  { path: 'proposals/start-proposal/catalyst-node', component: StartProposalCatalystPageComponent },
  { path: 'proposals/start-proposal/point-of-interest', component: StartProposalPoiPageComponent },
  { path: 'proposals/start-proposal/name-ban', component: StartProposalNamebanPageComponent },
  { path: 'proposals/start-proposal/request-a-grant', component: StartProposalGrantPageComponent },
  { path: 'transparency', component: TransparencyPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaoRoutingModule { }
