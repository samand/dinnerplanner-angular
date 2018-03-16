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

}
