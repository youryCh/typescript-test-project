export declare type TReview = [string, number, string];
export declare type BookAuthor = Pick<IAuthor, 'firstName' | 'lastName'>;
export declare enum Genre {
    fantasy = 0,
    adventure = 1,
    horror = 2,
    programming = 3
}
export interface IBook {
    name: string;
    genre: Genre;
    price: number;
    reviews?: TReview[];
    author: Partial<IAuthor>;
}
export interface IAuthor extends IRatingable {
    firstName: string;
    lastName: string;
}
export interface IRatingable {
    rating: number | null;
}
export interface IProduct {
    price: number;
    getProductDescription(): string;
}
export interface IBookCollection<T> {
    [key: string]: T;
}
export interface IGoogleapisBook {
    id: string;
    kind: string;
    etag: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
        publishedDate: string;
    };
}
export interface IBookResponse {
    kind: string;
    totalItems: number;
    items: IGoogleapisBook[];
}
export interface IOptionalAuthor extends Partial<IRatingable> {
    firstName?: string;
    lastName?: string;
    birthDate?: Date;
    booksWritten?: number;
}
export interface IPurchaseContext {
    user: {
        clientLevel: 1 | 2 | 3;
    };
    cart: {
        items: number;
        totalSum: number;
    };
}
