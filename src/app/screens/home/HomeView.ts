import {Category} from "../../../core/category/domain/Category";
import {Product} from "../../../core/product/domain/Product";

export interface HomeView {
    showCategories(categories: Category[]): void;
    showProducts(product: Product[]): void;
}
