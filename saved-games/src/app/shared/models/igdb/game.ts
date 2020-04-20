export class Game {
    id: number;
    name: string;
    cover: string;
    category: any;
    rating: number;
    summary: string;

    constructor($id: number, $name: string, $cover: string, $category: any, $rating: number, $summary: string) {
        this.id = $id;
        this.name = $name;
        this.cover = $cover;
        this.category = $category;
        this.rating = $rating;
        this.summary = $summary;
    }
}