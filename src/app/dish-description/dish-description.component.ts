import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service';
import { Dish } from '../dish';

@Component({
	selector: 'app-dish-description',
	templateUrl: './dish-description.component.html',
	styleUrls: ['./dish-description.component.css']
})
export class DishDescriptionComponent implements OnInit {
	
	constructor(public dinnerService: DinnerService) { }

	dishDetails: Dish = {
		id: 0,
		title: "",
		image: "",
		description: "",
		ingredients: [],
		price:0
	};
	ingredients=[];
	addOrRemoveText:string;
	ngOnInit() {
		//Update
		console.log(this.dishDetails.ingredients);
		if (this.dinnerService.currentDishId){
			this.dinnerService.getDishDetails(this.dinnerService.currentDishId).subscribe(data => {
				this.dishDetails.id		=	data.id;
				this.dishDetails.title	=	data.title;
				this.dishDetails.image	=	data.image;
				this.dishDetails.description= data.instructions;
				this.dishDetails.ingredients= data.extendedIngredients;
				this.dishDetails.price	=	Math.round(data.pricePerServing);
				console.log(this.dishDetails.ingredients);

				if (this.dinnerService.isDishInMenu(data.id)){
					this.addOrRemoveText = "Remove from menu";
				}
				else{
					this.addOrRemoveText = "Add to menu";
				}
			});
		}
	}

	addOrRemove(dishDetails){
		if(this.dinnerService.currentDishId){
			if (this.dinnerService.isDishInMenu(dishDetails.id)){
				this.dinnerService.removeDish(dishDetails.id);
				this.addOrRemoveText = "Add to menu";
			}
			else{
				this.dinnerService.addDish(dishDetails);
				this.addOrRemoveText = "Remove from menu";
			}
		}
	}
}