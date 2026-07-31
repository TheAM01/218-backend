export interface Product {
    id: string;
    title: string;
    brand: string;
    price: number;
    boxContent: string[];
    image: string;
    reviews: Review[];
}

export interface Review {
    author: string;
    stars: number;
    comment: string;
}