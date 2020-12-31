import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-addres',
  templateUrl: './footer-addres.component.html',
  styleUrls: ['./footer-addres.component.scss']
})
export class FooterAddresComponent {

  currDiv: string = 'A';

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  Clicked : boolean
  
  onClick(check){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }    
      
    }


}
