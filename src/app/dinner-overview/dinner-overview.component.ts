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
    console.log(this.dinnerService.menu)
  }

}
