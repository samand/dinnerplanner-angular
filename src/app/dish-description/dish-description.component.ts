import { Component, OnInit, Input } from '@angular/core';
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
	ingredients: Array<{}>;
	addOrRemoveText:string;
	dishLoaded:Boolean;
	ngOnInit() {
		//Update
		this.dishLoaded=false;
		if (this.getCookie("currentDish")){			
			this.dinnerService.getDishDetails(this.getCookie("currentDish")).subscribe(data => {
				this.dishDetails.id		=	data.id;
				this.dishDetails.title	=	data.title;
				this.dishDetails.image	=	data.image;
				this.dishDetails.description= data.instructions;
				this.dishDetails.ingredients= data.extendedIngredients;
				this.dishDetails.price	=	Math.round(data.pricePerServing);
				this.ingredients = data.extendedIngredients;
				this.dishLoaded=true;

				if (this.dinnerService.isDishInMenu(data.id)){
					this.addOrRemoveText = "Remove from menu";
				}
				else{
					this.addOrRemoveText = "Add to menu";
				}
			});
		}
	}
	getCookie(name) {
		let value = "; " + document.cookie;
		let parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	  }

	addOrRemove(dishDetails){
		if(this.dishLoaded){
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