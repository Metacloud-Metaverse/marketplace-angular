import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected http: HttpClient
  ) { }

  getNonceToSign(walletAddress: string): Observable<any> {
    return this.http.post(environment.baseUrlUser + '/user/get-nonce-to-sign', { address: walletAddress });
  }

  verifySigned(walletAddress: string, signature: string): Observable<any> {
    return this.http.post(environment.baseUrlUser + '/user/verify-signed', { address: walletAddress, signature: signature });
  }
}
