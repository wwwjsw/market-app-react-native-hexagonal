import {Uuid} from "../../../src/domain/shared/Uuid";
import {ProductRepository} from "../../../src/domain/product/ProductRepository";
import {Product} from "../../../src/domain/product/Product";
import {InMemoryProductRepository} from "../../../src/infrastructure/domain/product/InMemoryProductRepository";
import {FindProductsByCategory} from "../../../src/application/market/FindProductsByCategory";

describe('FindProductsByCategory should', () => {

    let action: FindProductsByCategory;
    let productRepository: ProductRepository;
    let results: Product[];

    test('find by category', async () => {
        const categoryId = Uuid.create('1');

        given_an_action();

        await when_the_action_is_executed(categoryId);

        then_the_result_has_values();
    });

    function given_an_action() {
        productRepository = new InMemoryProductRepository();
        action = new FindProductsByCategory(productRepository);
    }

    async function when_the_action_is_executed(categoryId: Uuid) {
        results = await action.execute(categoryId);
    }

    function then_the_result_has_values() {
        expect(results.length).toBe(2);
        expect(results[0].id).toBeEquals(Uuid.create('1'));
        expect(results[0].userId).toBeEquals(Uuid.create('1'));
        expect(results[0].title).toBe('Renault Stepway');
        expect(results[0].categoryId).toBeEquals(Uuid.create('1'));

        expect(results[1].id).toBeEquals(Uuid.create('2'));
        expect(results[1].userId).toBeEquals(Uuid.create('1'));
        expect(results[1].title).toBe('Mazda 3');
        expect(results[1].categoryId).toBeEquals(Uuid.create('1'));
    }
});
