import {ProductRepository} from "../../domain/product/ProductRepository";
import {Uuid} from "../../domain/shared/uuid/Uuid";
import {Product} from "../../domain/product/Product";

export class FindProductsByCategory {
    constructor(private productRepository: ProductRepository) {
    }

    async execute(categoryId: Uuid): Promise<Product[]> {
        return this.productRepository.findByCategory(categoryId);
    }
}
