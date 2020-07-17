import {Product} from "../../../core/product/domain/Product";

export interface ProductView {
    showProduct(product: Product): void;
}
