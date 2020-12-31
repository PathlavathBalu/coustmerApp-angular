import { Component, OnInit } from '@angular/core';
import { PaypalService } from '../services/paypal.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  payment: string[];
  paypalMethod: any;
  url = 'https://www.eposhybrid.uk/web_orders/PaypalGateway/mobile_payments?amount=9.75&order_id=MC_4508261600680113301&auth_code=DCALYY';

  currDiv: string = 'A';

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  Clicked : boolean
  onClick (check){
    //    console.log(check);
        if (check === 1){
          this.tab = 'tab1';
        }else if (check === 2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }
    }


  constructor(private PaypalServices: PaypalService) { }

  ngOnInit(): void {
     this.payment = [
       'paypal', 'sumup', 'payzon', 'worldpay', 'EVO'
      ];
      // this.PaypalServices.payPal().subscribe((result) => {
      //   this.paypalMethod = result;
      //   console.log(this.paypalMethod);
      //   return this.http.get(Url);
      // });
  }
  onPaymentClick(data) {
    switch (data) {
      case 'paypal':
        location.href = 'https://www.eposhybrid.uk/web_orders/PaypalGateway/mobile_payments?amount=9.75&order_id=MC_4508261600680113301&auth_code=DCALYY';
        break;
      case 'sumup':
        location.href = 'https://www.eposhybrid.uk/index.php/sumup/Payment/mobile_payment?amount=9.75&order_id=MC_8190851600680135525&auth_code=DCALYY';
        break;
      case 'payzon':
        location.href = 'https://www.eposhybrid.uk/index.php/web_orders/Payzone?amount=9.75&order_id=MC_7000371600680233732&auth_code=DCALYY';
        break;
      case 'worldpay':
        location.href = 'https://www.eposhybrid.uk/index.php/worldgateway/mobile_payment?amount=9.75&order_id=MC_8851921600680166614&auth_code=DCALYY';
        break;
      case 'EVO':
        location.href = 'https://www.eposhybrid.uk/index.php/evogateway/Evopay/mobile_payment?amount=9.75&order_id=MC_4216661600680202680&auth_code=DCALYY';
        break;
      default:
        break;
    }
  }
}

