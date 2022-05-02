import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    trigger('leaveElements', [
      transition(':leave', [
        animate('700ms ease', style({ opacity: 0, filter: 'blur(30px)' }))
      ]),
    ]),
  ]
})
export class MainLayoutComponent implements OnInit {

  isVideoOpen = false;
  isLogged = false;
  videoUrlIframe?: SafeResourceUrl;

  isMenuOpen = false;
  isMuted = true;
  scrolled: boolean = false;
  showMobile: boolean = true;
  @ViewChild('audio') audio!: ElementRef;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private breakpointObserver: BreakpointObserver,
  ) { }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showMobile = false;
        }
    });
  }

  closeMenu(e: any){
    this.isMenuOpen = false;
  }

  openLoginModal(){
    this.dialog.open(LoginModalComponent, {
      width: '520px',
      /* panelClass: 'modal-full-width-mobile', */
    });
  }
}
