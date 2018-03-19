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

	numberOfGuests: number = 0;
	dishSearchType: string = "";
	dishSearchText: string = "";
	currentDish: Dish = {
		id: 0,
		title: "thetitle",
		type: "",
		image: "",
		description: "",
		ingredients: []
	};
	menu = [];
	menuIds = [];
	currentDishInMenu: boolean = false;


	setNumberOfGuests(newNumberOfGuests) {
		this.numberOfGuests = newNumberOfGuests;
	}

	addDish() {
		if (this.currentDishInMenu) {
			console.log("Can't add to menu. Dish already in menu. ")
		}
		else {
			let newDish = {
				id: this.currentDish.id,
				title: this.currentDish.title,
				image: this.currentDish.image,
				description: this.currentDish.description,
				ingredients: this.currentDish.ingredients
			};
			this.menuIds.push(newDish.id)
			this.menu.push(newDish);
			this.currentDishInMenu = true;
			console.log("Dish wasn't in the menu. Added dish to menu. ");
		}
	}

	removeDish() {
		let key: any;
		if (this.currentDishInMenu) {
			for (key in this.menu) {
				if (this.menu[key].id == this.currentDish.id) {
					console.log("type of key: ", typeof(key));
					this.menu.splice(key,1);
				}
			}
			this.menuIds.splice(this.menuIds.indexOf(this.currentDish.id), 1);
		}
		else {
			console.log("Dish was not in menu. No dish was removed.");
		}
	}

	// API Calls

	getAllDishes(type, text): Observable<Dish[]> {
		let httpOptions = { headers: new HttpHeaders({ 'X-Mashape-Key': apiKey }), params: { 'type': type, 'query': text } };
		const search_url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
		return this.http.get<any>(search_url, httpOptions)
			.pipe(
				map(response => response.results),
				catchError(this.handleError('getAllDishes()'))
			);
	}

	newCurrentDish(id) {
		if (!(this.currentDish.id == id)) {
			//Remove info for old dish
			this.currentDish.id = 0;
			this.currentDish.title = 'Loading...';
			this.currentDish.image = '';
			this.currentDish.description = 'Loading...';
			this.currentDish.ingredients = [];
			this.getDishDetails(id).subscribe(data => {
				this.currentDish.id = data.id;
				this.currentDish.title = data.title;
				this.currentDish.image = data.image;
				this.currentDish.description = data.instructions;
				this.currentDish.ingredients = data.extendedIngredients;

				//Check if the current dish already is in the menu
				if (this.menuIds.includes(this.currentDish.id)) {
					this.currentDishInMenu = true;
					console.log("The current dish was in the menu. ")
				}
				else {
					this.currentDishInMenu = false;
					console.log("The current dish was not in the menu. ")
				}
			}, error => {
				console.log("Call for dish details failed. ")
			});
		}
	}

	getDishDetails(id) {
		let httpOptions = { headers: new HttpHeaders({ 'X-Mashape-Key': apiKey }) }
		let details_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/information");
		return this.http.get<any>(details_url, httpOptions)
			.pipe(
				catchError(this.handleError('getDishDetails()'))
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
