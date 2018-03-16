# Dinner Planner Angular

## How to get started

Since modern frameworks use some advanced features like compiling the templates and source code in pure
JavaScript and dynamically loading the needed content, you cannot anymore just open the HTML file 
in the browser. Instead, you will need a local webserver that will serve your app. Follow the instructions 
bellow to install all the neded dependencies (e.g. the framework libraries) and the development webserver.

1. First, make sure that you have npm installed on your system (follow the instructions
   at [Installing Node](https://docs.npmjs.com/getting-started/installing-node). The computers in the lab rooms
   should already have it, you will just need to do `module add node` to activate it (every time
   you start the terminal).

2. Run `npm install` through the terminal in the root of the repository. Let it
   install all the dependencies.

3. Run `npm start` through the terminal. This will start the webserver and the application should pop up in your
   browser ready for use. Alternatively you can open in through [http://localhost:4200]. Whenever you make changes in your code and save, the browser will update automatically, so you don't have to click refresh anymore.

## Understanding the startup code

* `src/index.html` - this is the static html file, and as opposed to previous labs, we don't put view's HTML here. It should only contain HTML that's shared among all the views (e.g. header, footer)
* `src/data/dinner.service.js` - example of dinner model with number of guests, getAllDishes function implemented using Angular's [HttpClient](https://angular.io/guide/http) and [Observables](https://angular.io/guide/observables) pattern. You can copy other functions from your original model (and modify as needed to make it work with TypeScript)
* `src/dish.js` and `src/ingredient.js` - since TypeScript is a strongly typed language, we want to take advantage of that and create classes to represent our dish and ingredient 
* `src/main.js` - this is where Angular is started
* `src/app/app.module.ts` - this is where our App is defined. Here the App module is created and associated to the App component - which is our root component. When you create other components, you will need to also include them in this file.
* `src/style.css` - put your global styles here
* `src/app.component.*` - our root component with it's `.ts` file containing the code `.html` file containint it's template and `.css` file containing component specific styles
* `src/app-routing.module.js` - this where routes for the Router are defined, i.e. how url address (e.g. /search, /dish/ID) map to specific component
* `src/dishes`, `src/select-dish` etc. - contain the `.ts`, `.html` and `.css` files for each component. You should create your own components roughly corresponding to your views from previous labs.
* `src/typings.d.ts`, `tsconfig.app.json`, `polyfills.ts` etc. - various configuration files needed for compiling and running the app

Check the components and see how they work. There are additional comments in the code.

## What you need to do

* reimplement the missing views following Angular practices
* use [Router](https://angular.io/guide/router) to map different url address (e.g. /search, /dish/ID) to specific components (the startup code already does that for welcome screen and select dish screen)
* implement cookies or localStorage so that the numberOfGuests and menu are persisted on the page reload


## Credits

This base of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.