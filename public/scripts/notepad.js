import { Product } from './product.js';
export class Notepad extends Product {
    constructor(name, price) {
        super(price);
        this.name = name;
    }
    getProductDescription() {
        return `Notepad "${this.name}"`;
    }
    calculateDiscount() {
        return 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub3RlcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxPQUFPLE9BQVEsU0FBUSxPQUFPO0lBQ2xDLFlBQ1MsSUFBWSxFQUNuQixLQUFhO1FBRWIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSE4sU0FBSSxHQUFKLElBQUksQ0FBUTtJQUlyQixDQUFDO0lBRU0scUJBQXFCO1FBQzFCLE9BQU8sWUFBWSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi9wcm9kdWN0LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RlcGFkIGV4dGVuZHMgUHJvZHVjdCB7XHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHByaWNlOiBudW1iZXJcclxuICApIHtcclxuICAgIHN1cGVyKHByaWNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcm9kdWN0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgTm90ZXBhZCBcIiR7dGhpcy5uYW1lfVwiYDsgIFxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZURpc2NvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuIl19