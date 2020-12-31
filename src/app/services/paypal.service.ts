import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) { }
  payPal() {
    const Url = 'https://www.eposhybrid.uk/web_orders/PaypalGateway/mobile_payments?amount=9.75&order_id=MC_4508261600680113301&auth_code=DCALYY';
    console.log(Url);
    return this.http.get(Url);
  }
}
