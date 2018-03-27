import { Component, OnInit } from '@angular/core';
import { DinnerService } from '../dinner.service';

@Component({
  selector: 'app-dinner-overview',
  templateUrl: './dinner-overview.component.html',
  styleUrls: ['./dinner-overview.component.css']
})
export class DinnerOverviewComponent implements OnInit {

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
}
