import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectDishComponent } from './select-dish/select-dish.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DinnerOverviewComponent } from './dinner-overview/dinner-overview.component';
import { PrintoutViewComponent } from './printout-view/printout-view.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SelectDishComponent },
  { path: 'details', component: DishDetailsComponent },
  { path: 'overview', component: DinnerOverviewComponent},
  { path: 'print', component: PrintoutViewComponent}
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}