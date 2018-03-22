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
    
  }

}
