import { Product } from './product.js';
export class Book extends Product {
    constructor(name, genre, price, author, reviews) {
        super(price);
        this.name = name;
        this.genre = genre;
        this.author = author;
        if (reviews) {
            this.reviews = reviews;
        }
        else {
            this.reviews = null;
        }
        this.calculateRating();
    }
    getProductDescription() {
        return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`;
    }
    addReview(review) {
        this.reviews.push(review);
        this.calculateRating();
    }
    removeReview(review) {
        const index = this.reviews.indexOf(review);
        if (index > -1) {
            this.reviews.splice(index, 1);
            this.calculateRating();
        }
    }
    get rating() {
        return this._rating;
    }
    getRreviews() {
        return this.reviews;
    }
    calculateRating() {
        var _a, _b;
        if (((_a = this.reviews) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const reviewSum = this.reviews.reduce((acc, curr) => acc + curr[1], 0);
            this._rating = reviewSum / ((_b = this.reviews) === null || _b === void 0 ? void 0 : _b.length);
        }
        else {
            this._rating = null;
        }
    }
    calculateDiscount(context) {
        const { cart: { items, totalSum } } = context !== null && context !== void 0 ? context : {};
        const hasDiscount = items >= Book.itemsForIncreasedDiscount &&
            totalSum >= Book.sumForIncreasedDiscount;
        if (hasDiscount) {
            return this.price * 35 / 100;
        }
        else {
            return super.calculateDiscount(context);
        }
    }
}
Book.itemsForIncreasedDiscount = 3;
Book.sumForIncreasedDiscount = 3000;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxPQUFPLElBQUssU0FBUSxPQUFPO0lBTS9CLFlBQ1MsSUFBWSxFQUNaLEtBQVksRUFDbkIsS0FBYSxFQUNOLE1BQWtCLEVBQ3pCLE9BQW1CO1FBRW5CLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU5OLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRVosV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUt6QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxlQUFlLEVBQUcsQ0FBQztJQUMxQixDQUFDO0lBRU0scUJBQXFCO1FBQzFCLE9BQU8sU0FBUyxJQUFJLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkYsQ0FBQztJQUVNLFNBQVMsQ0FBRSxNQUFlO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUcsQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWSxDQUFFLE1BQWU7UUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVPLGVBQWU7O1FBQ3JCLElBQUksQ0FBQSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFHLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUFBLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVTLGlCQUFpQixDQUFDLE9BQXlCO1FBQ25ELE1BQU0sRUFBQyxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUMsR0FBRyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQUM7UUFDaEQsTUFBTSxXQUFXLEdBQ2YsS0FBSyxJQUFJLElBQUksQ0FBQyx5QkFBeUI7WUFDdkMsUUFBUSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUUzQyxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1NBQzlCO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7O0FBcEVjLDhCQUF5QixHQUFHLENBQUMsQ0FBQztBQUM5Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJvb2tBdXRob3IsXHJcbiAgR2VucmUsXHJcbiAgSVJhdGluZ2FibGUsXHJcbiAgVFJldmlldyxcclxuICBJUHVyY2hhc2VDb250ZXh0XHJcbn0gZnJvbSAnLi9tb2RlbHMuanMnO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4vcHJvZHVjdC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vayBleHRlbmRzIFByb2R1Y3QgaW1wbGVtZW50cyBJUmF0aW5nYWJsZSB7XHJcbiAgcHJpdmF0ZSBfcmF0aW5nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSByZXZpZXdzOiBUUmV2aWV3W107XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaXRlbXNGb3JJbmNyZWFzZWREaXNjb3VudCA9IDM7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgc3VtRm9ySW5jcmVhc2VkRGlzY291bnQgPSAzMDAwO1xyXG4gICAgXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyBnZW5yZTogR2VucmUsXHJcbiAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgcHVibGljIGF1dGhvcjogQm9va0F1dGhvcixcclxuICAgIHJldmlld3M/OiBUUmV2aWV3W10sXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwcmljZSk7XHJcblxyXG4gICAgaWYgKHJldmlld3MpIHtcclxuICAgICAgdGhpcy5yZXZpZXdzID0gcmV2aWV3cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmV2aWV3cyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVSYXRpbmcgKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJvZHVjdERlc2NyaXB0aW9uICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBCb29rIFwiJHt0aGlzLm5hbWV9XCIgYnkgJHt0aGlzLmF1dGhvci5maXJzdE5hbWV9ICR7dGhpcy5hdXRob3IubGFzdE5hbWV9YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRSZXZpZXcgKHJldmlldzogVFJldmlldyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXZpZXdzLnB1c2gocmV2aWV3KTtcclxuICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nICgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVJldmlldyAocmV2aWV3OiBUUmV2aWV3KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmV2aWV3cy5pbmRleE9mKHJldmlldyk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5yZXZpZXdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlUmF0aW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJhdGluZyAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yYXRpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UnJldmlld3MgKCk6IFJlYWRvbmx5PFRSZXZpZXdbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmV2aWV3cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlUmF0aW5nICgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJldmlld3M/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmV2aWV3U3VtID0gdGhpcy5yZXZpZXdzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyWzFdLCAwKTtcclxuXHJcbiAgICAgIHRoaXMuX3JhdGluZyA9IHJldmlld1N1bSAvIHRoaXMucmV2aWV3cz8ubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcmF0aW5nID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVEaXNjb3VudChjb250ZXh0OiBJUHVyY2hhc2VDb250ZXh0KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHtjYXJ0OiB7aXRlbXMsIHRvdGFsU3VtfX0gPSBjb250ZXh0ID8/IHt9O1xyXG4gICAgY29uc3QgaGFzRGlzY291bnQ6IGJvb2xlYW4gPSBcclxuICAgICAgaXRlbXMgPj0gQm9vay5pdGVtc0ZvckluY3JlYXNlZERpc2NvdW50ICYmXHJcbiAgICAgIHRvdGFsU3VtID49IEJvb2suc3VtRm9ySW5jcmVhc2VkRGlzY291bnQ7XHJcblxyXG4gICAgaWYgKGhhc0Rpc2NvdW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByaWNlICogMzUgLyAxMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gc3VwZXIuY2FsY3VsYXRlRGlzY291bnQoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==