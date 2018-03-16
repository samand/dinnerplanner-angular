import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Dish } from './dish';

const httpOptions = {
  headers: new HttpHeaders({ 'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB' })
};


@Injectable()
export class DinnerService {

  constructor(private http: HttpClient) { }
  
  numberOfGuests:number = 0;

  

  // API Calls

  getAllDishes(): Observable<Dish[]> {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
    return this.http.get<any>(url, httpOptions)
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
  private handleError (operation = 'operation') {
    return (error: any): Observable<any> => {
      
      let message = error;
      if (error.error){
        message = error.error.message
      } else if (error.message) {
        message = error.message
      }
      
      console.error(operation + ' API Error:', message); // log to console instead
      
      throw error;
    };
  }
}
