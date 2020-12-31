import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  RequestOptions: any;

  myUrl = 'http://www.moonking.co.uk:8000/token/';

  constructor(private http: HttpClient) { }

  TokenDetail(): Observable<any> {

    const TokenData = {
      app_key: 'DCALYY'
    };

    // const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    console.log(this.myUrl, TokenData);
    return this.http.post(this.myUrl, JSON.stringify(TokenData));
  }
}
