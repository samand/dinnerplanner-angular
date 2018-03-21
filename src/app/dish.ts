import { Ingredient } from './ingredient';

export class Dish {
    id: number;
    title: string;
    image?: string;
    description?: string;
    ingredients?: Ingredient[];
    price?: number;
}