
import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { LoyaltyService } from '../services/loyalty.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})

export class LoyaltyComponent implements OnInit {
   elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'D:/Farooq/api_v1/api_v1/templates/customer_app.png';

loyaltyData: any;
loyaltyHistory: any;
// loyalty_management_data: [];
 loyaltyHhistoryData: any;
 collectedPoints: any;
 redemeedPoints: any;
 remainPoints: any;
 email: any;
tab = 'tab1';
items: any;
// tab1;
// tab2;
// tab3;
// Clicked: boolean;
// loyaltyListory: any;

  constructor(private loyaltyService: LoyaltyService) { }
  ngOnInit(): void {
    this.loyaltyService.loyaltyDetail().subscribe((result) => {
     this.loyaltyData = result;
     this.collectedPoints = result.loyalty_management_data[0].collected_points;
     this.redemeedPoints = result.loyalty_management_data[0].redemeed_points;
     this.remainPoints = result.loyalty_management_data[0].remain_points;
     this.email = result.loyalty_management_data[0].email;
     this.loyaltyHhistoryData = result.loyalty_history_data;
     for (let i = 0; i < this.loyaltyHhistoryData.length; i++) {
      if ( this.loyaltyHhistoryData[i].collected_points == null) {
        this.loyaltyHhistoryData[i].collected_points = 0;
      }
     }
     console.log('Loyality****', this.loyaltyData);
 });
  }

  currDiv: string = 'A';

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  onClick(check){
    //    console.log(check);
        if (check === 1){
          this.tab = 'tab1';
        }else if (check === 2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }

    }

}