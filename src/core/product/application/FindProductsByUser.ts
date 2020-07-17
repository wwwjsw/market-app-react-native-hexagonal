import {ProductRepository} from "../domain/ProductRepository";
import {Product} from "../domain/Product";
import {Uuid} from "../../shared/domain/Uuid";

export class FindProductsByUser {
    constructor(private productRepository: ProductRepository) {

    }

    async execute(userId: Uuid): Promise<Product[]> {
        return this.productRepository.findByUser(userId);
    }
}
