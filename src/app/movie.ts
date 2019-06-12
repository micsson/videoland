export class Movie {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }

export class CartItem {
  movie: Movie;
  quantity: number;
}