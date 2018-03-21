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
	}

	newNumberOfGuests() {
		//Checks that a positive, numeric value is assigned for numberOfGuests
		if (!(typeof(this.dinnerService.numberOfGuests) == 'number')) {
			this.dinnerService.numberOfGuests = 1;
		}
		if (this.dinnerService.numberOfGuests < 1) {
			this.dinnerService.numberOfGuests = 1;
		}
		//notifyObservers
	}

}
