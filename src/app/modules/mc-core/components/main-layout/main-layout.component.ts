import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';

import Web3 from "web3";
import { from, map, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

declare const window: any;
const Web3Modal = window.Web3Modal.default;
//import Web3Modal from "web3modal";

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

  selectedAccount: any;

  constructor(
    protected userService: UserService,

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

  async openLoginModal(){
    const providerOptions = {
      // See Provider Options Section
      /*binancechainwallet: {
        package: true
      },*/
    };

    const web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: string[]) => {
      console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: number) => {
      console.log('Chain Changed: HEX: ' + chainId + ' - String: ' + this.hex2a(chainId));
      console.log(chainId);
    });

    // Subscribe to provider connection
    provider.on("connect", (info: { chainId: number }) => {
      console.log(info);
    });

    // Subscribe to provider disconnection
    provider.on("disconnect", (error: { code: number; message: string }) => {
      console.log(error);
    });

    const web3 = new Web3(provider);

    from(web3.eth.requestAccounts())
    .pipe(switchMap(accounts => {
      this.selectedAccount = accounts[0];
      return this.userService.getNonceToSign(this.selectedAccount);
    }))
    .pipe(switchMap(async (params: any) => {
      console.log(params);
      return await web3.eth.personal.sign(`0x${this.toHex(params.data.guest_private_secret)}`, this.selectedAccount, `0x${this.toHex(params.data.guest_private_secret)}`);
    }))
    .pipe(switchMap(signature => {
      return this.userService.verifySigned(this.selectedAccount, signature);
    }))
    .subscribe(params => {
      console.log(params);
    });
    //web3.eth.getAccounts().then(data => console.log(data));

    /*this.dialog.open(LoginModalComponent, {
      width: '520px',
    });*/
  }

  private toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }

  hex2a(hexx: any) {
    let hexString = hexx;
    let strOut = '';
        for (let x = 0; x < hexString.length; x += 2) {
            strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
        }
    return strOut;
  }
}
