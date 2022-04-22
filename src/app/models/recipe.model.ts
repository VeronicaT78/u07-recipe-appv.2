export interface ApiData {
    results: Recipe[];
}

/* export interface Recipe {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    summary: string;
    instructions: string;
    ingredientString: string[];
} */

export class Recipe{
    public title: string;
    public servings: number;
    public readyInMinutes: number;
    public image: string;
    public summary: string;
    public instructions: string;
    public ingredientString: string[];

    constructor(title: string, servings: number, readyInMinutes: number, 
        image: string, summary: string, instructions: string, ingredientString: string[]){
        this.title = title;
        this.servings = servings;
        this.readyInMinutes = readyInMinutes;
        this.image = image;
        this.summary = summary;
        this.instructions = instructions;
        this.ingredientString = ingredientString;
    }
}