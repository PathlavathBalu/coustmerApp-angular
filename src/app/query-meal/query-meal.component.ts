import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-meal',
  templateUrl: './query-meal.component.html',
  styleUrls: ['./query-meal.component.scss']
})
export class QueryMealComponent implements OnInit {
  
  public show:boolean = false;
  public buttonName:any = 'Show';
  currDiv: string = 'A';
  ngOnInit () {  }


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
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}

