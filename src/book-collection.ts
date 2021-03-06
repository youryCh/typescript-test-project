import {Book} from './book.js';
import {Genre, IProduct} from './models.js';
import {Collection} from './collection.js';

/**
 * Полка с литературой по программированию.
 */
export const programmingLiterature: Collection<Book> = new Collection(); 

programmingLiterature.set(
    'Cracking the coging interview',
    new Book (
        'Cracking the coging interview', Genre.programming, 100,
        {
            firstName: 'Gayle',
            lastName: 'Laakmann',
        },
    )
);

export class ProductCollection<T extends IProduct> extends Collection<T> {
    public get price (): number {
        let totalPrice = 0;
        const keys = Object.getOwnPropertyNames(this.items);

        for (const key of keys) {
            const item = this.items[key];
            totalPrice += item?.price ?? 0;
        }

        return totalPrice;
    }
}

export class BookCollection extends ProductCollection<Book> {}  
