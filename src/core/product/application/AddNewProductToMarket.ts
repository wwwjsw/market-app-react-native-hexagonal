import {ProductRepository} from "../domain/ProductRepository";
import {Uuid} from "../../shared/domain/Uuid";
import {UuidService} from "../../shared/domain/UuidService";
import {Product} from "../domain/Product";
import {ProductTitle} from "../domain/ProductTitle";
import {ProductDescription} from "../domain/ProductDescription";
import {ProductValue} from "../domain/ProductValue";

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
