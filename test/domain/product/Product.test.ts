import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import {Product} from "../../../src/domain/product/Product";

describe('a product should', () => {

    test('be created', () => {
        const id = Uuid.create('1');
        const title = 'Product A';
        const description = 'description';
        const categoryId = Uuid.create('2');
        const images = ['image1', 'image2'];
        const value = 5;

        const product = new Product(id, title, description, categoryId, images, value);

        expect(product.id).toBeEquals(id);
        expect(product.title).toBe(title);
        expect(product.description).toBe(description);
        expect(product.categoryId).toBeEquals(categoryId);
        expect(product.images).toBe(images);
        expect(product.value).toBe(value);
    });

});
