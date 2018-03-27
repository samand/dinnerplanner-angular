import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service';

@Component({
	selector: 'app-printout-view',
	templateUrl: './printout-view.component.html',
	styleUrls: ['./printout-view.component.css']
})
export class PrintoutViewComponent implements OnInit {

	constructor(public dinnerService: DinnerService) { }

	ngOnInit() {
		if (this.dinnerService.getCookie("menu")) {
			this.dinnerService.menu = JSON.parse(this.dinnerService.getCookie("menu"));
		}
		if (this.dinnerService.getCookie("menuIds")) {
			this.dinnerService.menuIds = JSON.parse(this.dinnerService.getCookie("menuIds"));
		}
		if (this.dinnerService.getCookie("menuPricePerServing")) {
			this.dinnerService.menuPricePerServing = JSON.parse(this.dinnerService.getCookie("menuPricePerServing"));
		}
	}

}
