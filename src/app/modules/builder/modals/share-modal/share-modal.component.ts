import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent implements OnInit {

  link = 'Loremipsumdolorsitametconsecteturadipisicingelit';
  isCopied = false;

  constructor() { }

  ngOnInit(): void {
  }

  copyButton(){
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 1000);
  }
}
