import {ProductRepository} from "../domain/ProductRepository";
import {Uuid} from "../../shared/domain/Uuid";
import {Product} from "../domain/Product";

export class FindProductsByCategory {
    constructor(private productRepository: ProductRepository) {
    }

    async execute(categoryId: Uuid): Promise<Product[]> {
        return this.productRepository.findByCategory(categoryId);
    }
}
