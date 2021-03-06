import {Genre, IAuthor, IProduct, TReview} from './models.js';

export const reviews: TReview[] = [
    ['John', 5, 'It is my fovarite book'],
    ['Anna', 3, 'I expected more from it'],
    ['Sherlock', 0, 'I don\'t read this'],
];

export const author: Partial<IAuthor> = {
    firstName: 'Ivan',
    lastName: 'Denisovich',
    rating: 4,
};

export const notepad: IProduct = {
    price: 40,
    getProductDescription: () => {
        return 'Notepad 50 pages';
    }
}

export const genreMapping = {
    [Genre.adventure]: 'Adventure',
    [Genre.fantasy]: 'Fantasy',
    [Genre.horror]: 'Horror',
};
