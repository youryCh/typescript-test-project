export class Product {
    constructor(price) {
        this.price = price;
    }
    getProductDescription() {
        return 'Some product';
    }
    getDiscountPrice(context) {
        return this.price - this.calculateDiscount(context);
    }
    calculateDiscount(context) {
        return this.price * (context.user.clientLevel * 10) / 100;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxPQUFPO0lBR2xCLFlBQWEsS0FBYTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU0scUJBQXFCO1FBQzFCLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBRSxPQUF5QjtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFUyxpQkFBaUIsQ0FBRSxPQUF5QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDNUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHVyY2hhc2VDb250ZXh0fSBmcm9tICcuL21vZGVscy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdCB7XHJcbiAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcmljZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJvZHVjdERlc2NyaXB0aW9uICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdTb21lIHByb2R1Y3QnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc2NvdW50UHJpY2UgKGNvbnRleHQ6IElQdXJjaGFzZUNvbnRleHQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpY2UgLSB0aGlzLmNhbGN1bGF0ZURpc2NvdW50KGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZURpc2NvdW50IChjb250ZXh0OiBJUHVyY2hhc2VDb250ZXh0KTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnByaWNlICogKGNvbnRleHQudXNlci5jbGllbnRMZXZlbCAqIDEwKSAvIDEwMDtcclxuICB9XHJcbn1cclxuIl19