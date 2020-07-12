import {Category} from "../../../../domain/category/Category";
import {Product} from "../../../../domain/product/Product";

export interface HomeView {
    showCategories(categories: Category[]): void;
    showProducts(product: Product[]): void;
}
