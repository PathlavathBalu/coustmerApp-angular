
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyService {
  Url = 'http://www.moonking.co.uk:8000/loyality_history/?android_app_key=HZFAYW&customer_id=WC_HZFAYW_404337051572867580';
  constructor(private http: HttpClient) { }

    loyaltyDetail(): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders().set(
       'Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfY29kZSI6IkRDQUxZWSIsImV4cCI6MTYwNjQyNDY1M30.OXQlb2sGt7fooeiCLndkQyItt-123iyI8kq4_dd1Vv4'
        )
    };
    return this.http.get(this.Url, requestOptions);
    }

}
