import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProposalDetailPageComponent } from './pages/proposal-detail-page/proposal-detail-page.component';
import { ProposalsPageComponent } from './pages/proposals-page/proposals-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'proposals', component: ProposalsPageComponent },
  { path: 'proposals/proposal-detail', component: ProposalDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaoRoutingModule { }
