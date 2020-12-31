import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-modifers',
  templateUrl: './pizza-modifers.component.html',
  styleUrls: ['./pizza-modifers.component.scss']
})
export class PizzaModifersComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
