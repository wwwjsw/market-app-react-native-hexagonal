import {ProductRepository} from "../domain/ProductRepository";
import {Uuid} from "../../shared/domain/Uuid";
import {Product} from "../domain/Product";

export class FindProductById {
    constructor(private productRepository: ProductRepository) {
    }

    async execute(productId: Uuid): Promise<Product> {
        const product = await this.productRepository.findById(productId);
        if (product === undefined) {
            throw new ProductNotFound();
        }

        return product;
    }
}

export class ProductNotFound extends Error {
}
