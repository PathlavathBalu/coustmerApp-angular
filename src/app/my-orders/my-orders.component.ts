import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../services/order-history.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  myOrder: any;

  constructor(private orderHistoryService: OrderHistoryService, private tokenService: TokenService, ) { }

  ngOnInit(): void {
    // this.tokenService.TokenDetail().subscribe((result) => {
    //   this.TokenData = result;
    //   console.log("Token****", this.TokenData);
    // });
    this.orderHistoryService.orderHistory().subscribe((result) => {
     this.myOrder = result;
     console.log('OrderHistory****', this.myOrder);
 });
  }


}
