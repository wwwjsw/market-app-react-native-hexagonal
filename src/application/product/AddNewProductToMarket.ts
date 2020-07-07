import {ProductRepository} from "../../domain/product/ProductRepository";
import {Uuid} from "../../domain/shared/Uuid";
import {UuidService} from "../../domain/shared/UuidService";
import {Product} from "../../domain/product/Product";
import {ProductTitle} from "../../domain/product/ProductTitle";
import {ProductDescription} from "../../domain/product/ProductDescription";
import {ProductValue} from "../../domain/product/ProductValue";

export class AddNewProductToMarket {
    constructor(private productRepository: ProductRepository, private uuidService: UuidService) {
    }

    async execute(userId: Uuid, title: string, description: string, categoryId: Uuid, images: string[], value: number) {
        const id = this.uuidService.nextId();

        const productTitle = ProductTitle.create(title);
        const productDescription = ProductDescription.create(description);
        const productValue = ProductValue.create(value);

        const product = new Product(
            id,
            userId,
            productTitle,
            productDescription,
            categoryId,
            images,
            productValue
        );

        await this.productRepository.store(product);
    }
}
