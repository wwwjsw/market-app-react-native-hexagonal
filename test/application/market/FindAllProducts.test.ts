import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import {FindAllProducts} from "../../../src/application/market/FindAllProducts";
import {ProductRepository} from "../../../src/domain/product/ProductRepository";
import {Product} from "../../../src/domain/product/Product";
import {InMemoryProductRepository} from "../../../src/infrastructure/domain/product/InMemoryProductRepository";

describe('FindAllProducts should', () => {

    let action: FindAllProducts;
    let productRepository: ProductRepository;
    let results: Product[];

    test('find all', async () => {
        given_an_action();

        await when_the_action_is_executed();

        then_the_result_has_values();
    });

    function given_an_action() {
        productRepository = new InMemoryProductRepository();
        action = new FindAllProducts(productRepository);
    }

    async function when_the_action_is_executed() {
        results = await action.execute();
    }

    function then_the_result_has_values() {
        expect(results.length).toBe(3);
        expect(results[0].id).toBeEquals(Uuid.create('1'));
        expect(results[0].userId).toBeEquals(Uuid.create('1'));
        expect(results[0].title).toBe('Renault Stepway');
        expect(results[0].categoryId).toBeEquals(Uuid.create('1'));

        expect(results[1].id).toBeEquals(Uuid.create('2'));
        expect(results[1].userId).toBeEquals(Uuid.create('1'));
        expect(results[1].title).toBe('Mazda 3');
        expect(results[1].categoryId).toBeEquals(Uuid.create('1'));

        expect(results[2].id).toBeEquals(Uuid.create('3'));
        expect(results[2].userId).toBeEquals(Uuid.create('2'));
        expect(results[2].title).toBe('TV Samsung');
        expect(results[2].categoryId).toBeEquals(Uuid.create('2'));
    }
});
