import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service'
import { Dish } from '../dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];
  status: string = 'INITIAL';

  // this is how we reference the service (i.e. our model)
  constructor(public dinnerService: DinnerService) { }

  // this methods is called by Angular lifecycle when the 
  // component is actually created
  // that's a good place to call the API and get the data
  ngOnInit() {
    this.getDishes();
  }

  
  getDishes(): void {
    
    // when data is retrieved we update the component property 
    // this will cause the component to re-render
    this.dinnerService.getAllDishes().subscribe(dishes => {
      this.dishes = dishes
      this.status = 'LOADED'
    }, error => {
      this.status = 'ERROR'
    });
  }

}
