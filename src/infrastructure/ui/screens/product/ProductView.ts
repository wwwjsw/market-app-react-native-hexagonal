import {Product} from "../../../../domain/product/Product";

export interface ProductView {
    showProduct(product: Product): void;
}
