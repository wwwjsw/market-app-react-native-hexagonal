import {ProductRepository} from "../../domain/product/ProductRepository";
import {Product} from "../../domain/product/Product";

export class FindAllProducts {
    constructor(private productRepository: ProductRepository) {
    }

    async execute(): Promise<Product[]> {
        return this.productRepository.findAll();
    }
}
