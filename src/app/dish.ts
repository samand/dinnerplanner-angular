import { Ingredient } from './ingredient';

export class Dish {
    id: number;
    title: string;
    type: string;
    image?: string;
    description?: string;
    ingredients?: Ingredient[];
}