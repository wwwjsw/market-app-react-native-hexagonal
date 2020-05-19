import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import {ProductRepository} from "../../../src/domain/product/ProductRepository";
import {Product} from "../../../src/domain/product/Product";
import {InMemoryProductRepository} from "../../../src/infrastructure/domain/product/InMemoryProductRepository";
import {FindProductById, ProductNotFound} from "../../../src/application/market/FindProductById";

describe('FindProductById should', () => {

    let action: FindProductById;
    let productRepository: ProductRepository;
    let result: Product;
    let executor: () => void;

    test('find by id', async () => {
        const productId = Uuid.create('1');

        given_an_action();

        await when_the_action_is_executed(productId);

        then_the_result_has_values();
    });

    test('throw error when not found', async () => {
        const productId = Uuid.create('99');

        given_an_action();

        executor = async () => {
            await action.execute(productId);
        };

        await expect(executor()).rejects.toThrow(ProductNotFound)
    });


    function given_an_action() {
        productRepository = new InMemoryProductRepository();
        action = new FindProductById(productRepository);
    }

    async function when_the_action_is_executed(productId: Uuid) {
        result = await action.execute(productId);
    }

    function then_the_result_has_values() {
        expect(result.id).toBeEquals(Uuid.create('1'));
        expect(result.userId).toBeEquals(Uuid.create('1'));
        expect(result.title).toBe('Renault Stepway');
        expect(result.categoryId).toBeEquals(Uuid.create('1'));
    }
});
