import { Component, OnInit } from '@angular/core';
import { ResturantService } from './services/resturant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restDetail: any;
  constructor(private resturantService: ResturantService) {}
  ngOnInit(): void {
    this.resturantService.restaurantDetail().subscribe((result) => {
     this.restDetail = result;
     console.log('Loyality****', this.restDetail);
 });
  }
}


