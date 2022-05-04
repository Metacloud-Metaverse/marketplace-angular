import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { VotesModalComponent } from '../../modals/votes-modal/votes-modal.component';

@Component({
  selector: 'app-proposal-detail-page',
  templateUrl: './proposal-detail-page.component.html',
  styleUrls: ['./proposal-detail-page.component.scss']
})
export class ProposalDetailPageComponent implements OnInit {

  category = 0;
  status = 0;
  addedWatchlist = false;
  isLogged = true;

  comments:any = [
    {},{},{},{},{},{},{},{},
  ]

  slice = 5;

  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private metaTagService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('[name_proposal] | metacloud');
    this.metaTagService.updateTag(
      { name: 'description', content: '' }
    );
  }

  openVotesModal(){
    this.dialog.open(VotesModalComponent, {
      width: '520px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }

  loadMoreComments(){
    this.slice = this.slice + 10;
  }
}
