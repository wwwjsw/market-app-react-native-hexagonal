import {ProductRepository} from "../../domain/product/ProductRepository";
import {Uuid} from "../../domain/shared/Uuid";
import {UuidService} from "../../domain/shared/UuidService";
import {Product} from "../../domain/product/Product";

export class AddNewProductToMarket {
    constructor(private productRepository: ProductRepository, private uuidService: UuidService) {
    }

    async execute(userId: Uuid, title: string, description: string, categoryId: Uuid, images: string[], value: number) {
        const id = this.uuidService.nextId();
        const product = new Product(
            id,
            userId,
            title,
            description,
            categoryId,
            images,
            value
        );

        await this.productRepository.store(product);
    }
}
