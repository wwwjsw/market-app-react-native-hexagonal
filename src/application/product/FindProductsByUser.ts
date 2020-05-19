import {ProductRepository} from "../../domain/product/ProductRepository";
import {Product} from "../../domain/product/Product";
import {Uuid} from "../../domain/shared/uuid/Uuid";

export class FindProductsByUser {
    constructor(private productRepository: ProductRepository) {

    }

    async execute(userId: Uuid): Promise<Product[]> {
        return this.productRepository.findByUser(userId);
    }
}
