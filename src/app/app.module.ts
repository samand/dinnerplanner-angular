import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectDishComponent } from './select-dish/select-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishDescriptionComponent } from './dish-description/dish-description.component';
import { DinnerService } from './dinner.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomeComponent,
    SelectDishComponent,
    DishesComponent,
    DishDetailsComponent,
    DishDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
