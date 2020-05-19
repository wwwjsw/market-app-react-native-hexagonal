import {ProductRepository} from "../../domain/product/ProductRepository";
import {Uuid} from "../../domain/shared/uuid/Uuid";
import {Product} from "../../domain/product/Product";

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
