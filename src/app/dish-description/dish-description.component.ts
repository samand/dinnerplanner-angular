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

	addOrRemoveText:string;
	ngOnInit() {
		console.log("ngoninit");
		this.updateButton();
	}

	updateButton(){
		if(this.dinnerService.currentDishInMenu){
			this.addOrRemoveText = "Remove from menu";
		}
		else{
			this.addOrRemoveText = "Add to menu";
		}
	}

	addOrRemove(){
		if(this.dinnerService.currentDishInMenu){
			this.dinnerService.removeDish();
			this.updateButton();
		}
		else{
			this.dinnerService.addDish();
			this.updateButton();
		}

	}

	
	

}