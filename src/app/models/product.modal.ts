export class Products {
  constructor(
    public image: string,
    public productName: string,
    public desc: string,
    public discount?: number,
    public priceWithOutDiscount?: number,
    public price?: number,
    ) {}
}
