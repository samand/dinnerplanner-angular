import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(public dinnerService: DinnerService) { }
	
	ngOnInit() {
		if (this.dinnerService.getCookie("menu")){
			this.dinnerService.menu = JSON.parse(this.dinnerService.getCookie("menu"));
		}
		if (this.dinnerService.getCookie("menuIds")){
			this.dinnerService.menuIds = JSON.parse(this.dinnerService.getCookie("menuIds"));
		}
		if (this.dinnerService.getCookie("menuPricePerServing")){
			this.dinnerService.menuPricePerServing = JSON.parse(this.dinnerService.getCookie("menuPricePerServing"));
		}
	}

	newNumberOfGuests() {
		//Checks that a positive, numeric value is assigned for numberOfGuests
		if (!(typeof(this.dinnerService.numberOfGuests) == 'number')) {
			this.dinnerService.setNumberOfGuests(1);
		}
		if (this.dinnerService.numberOfGuests < 1) {
			this.dinnerService.setNumberOfGuests(1);
		}
		else{
			this.dinnerService.setNumberOfGuests(this.dinnerService.numberOfGuests)
		}
		//notifyObservers
	}

}
