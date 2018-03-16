import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectDishComponent } from './select-dish/select-dish.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SelectDishComponent}
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}