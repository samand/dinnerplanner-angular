import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service';
import { Dish } from '../dish';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
	selector: 'app-dishes',
	templateUrl: './dishes.component.html',
	styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
	
	
	dishes: Dish[];
	status: string = 'INITIAL';
	searchText: string ="";
	searchType: string = 'main course';
	dishTypes = [
		{ apiName: "main course", displayName: "Main course" },
		{ apiName: "side dish", displayName: "Side dish" },
		{ apiName: "dessert", displayName: "Dessert" },
		{ apiName: "appetizer", displayName: "Appetizer" },
		{ apiName: "salad", displayName: "Salad" },
		{ apiName: "bread", displayName: "Bread" },
		{ apiName: "breakfast", displayName: "Breakfast" },
		{ apiName: "soup", displayName: "Soup" },
		{ apiName: "beverage", displayName: "Beverage" },
		{ apiName: "sauce", displayName: "Sauce" },
		{ apiName: "drink", displayName: "Drink" }
	]

	constructor(public dinnerService: DinnerService) { }

	ngOnInit() {
	}

	//SEARCH
	typeChanged(option){
		this.searchType = option;
	}
	textChanged(event){
		this.searchText = event.target.value;
	}

	search(): void {
		// when data is retrieved we update the component property 
		// this will cause the component to re-render
		this.dinnerService.getAllDishes(this.searchType,this.searchText).subscribe(dishes => {
			console.log(dishes);
			this.dishes = dishes
			this.status = 'LOADED'
		}, error => {
			this.status = 'ERROR'
		});
	}


	//CHOOSE A DISH
	clickedDish(dishId){
		this.dinnerService.newCurrentDish(dishId);
	}
}
