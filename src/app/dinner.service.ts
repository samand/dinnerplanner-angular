import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Dish } from './dish';
import { Router, RouterLink } from '@angular/router';

const apiKey = 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB';


@Injectable()
export class DinnerService {
	constructor(private http: HttpClient) { }
	numberOfGuests: number = 4;
	currentDishId: number = 0;
	menu = [];
	menuIds = [];
/*
	//currentDishDetails: Dish = {
		id: 0,
		title: "",
		image: "",
		description: "",
		ingredients: []
	};
*/


	/*
	NUMBER OF GUESTS
	*/

	setNumberOfGuests(newNumberOfGuests) {
		this.numberOfGuests = newNumberOfGuests;
	}

	/*
	CURRENT DISH
	*/

	newCurrentDish(dishId){
		this.currentDishId = dishId;
	}

	isDishInMenu(dishId){
		if (this.menuIds.includes(dishId)){
			return true;
		}
		else{return false;}
	}

	getDishDetails(dishId) {
		let httpOptions = { headers: new HttpHeaders({ 'X-Mashape-Key': apiKey }) }
		let details_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(dishId).concat("/information");
		return this.http.get<any>(details_url, httpOptions)
			.pipe(
				catchError(this.handleError('getDishDetails()'))
			);
	}

	/*
	MENU
	*/

	addDish(dishDetails) {
		if (this.isDishInMenu(dishDetails.id)) {
			console.log("Can't add to menu. Dish already in menu. ")
		}
		else {
			let newDish = {
				id: dishDetails.id,
				title: dishDetails.title,
				image: dishDetails.image,
				description: dishDetails.description,
				ingredients: dishDetails.ingredients,
				price: dishDetails.price
			};
			this.menuIds.push(dishDetails.id)
			this.menu.push(newDish);
			console.log("Dish wasn't in the menu. Added dish to menu. ");
		}
	}

	removeDish(dishId) {
		let key: any; //Iterator. Although it is parsed as a string at first, JS converts to number when needed. 
		if (this.isDishInMenu(dishId)) {
			for (key in this.menu) {
				if (this.menu[key].id == dishId) {
					this.menu.splice(key,1);
				}
			}
			this.menuIds.splice(this.menuIds.indexOf(dishId), 1);
		}
		else {
			console.log("Dish was not in menu. No dish was removed.");
		}
	}


	/*
	SEARCH
	*/

	getAllDishes(type, text): Observable<Dish[]> {
		let httpOptions = { headers: new HttpHeaders({ 'X-Mashape-Key': apiKey }), params: { 'type': type, 'query': text } };
		const search_url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
		return this.http.get<any>(search_url, httpOptions)
			.pipe(
				map(response => response.results),
				catchError(this.handleError('getAllDishes()'))
			);
	}


	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError(operation = 'operation') {
		return (error: any): Observable<any> => {

			let message = error;
			if (error.error) {
				message = error.error.message
			} else if (error.message) {
				message = error.message
			}

			console.error(operation + ' API Error:', message); // log to console instead

			throw error;
		};
	}
}
