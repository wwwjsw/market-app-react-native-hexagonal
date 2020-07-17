import {Uuid} from "../../../../src/core/shared/domain/Uuid";
import {ProductRepository} from "../../../../src/core/product/domain/ProductRepository";
import {Product} from "../../../../src/core/product/domain/Product";
import {InMemoryProductRepository} from "../../../../src/core/product/infrastructure/InMemoryProductRepository";
import {FindProductsByUser} from "../../../../src/core/product/application/FindProductsByUser";
import {ProductTitle} from "../../../../src/core/product/domain/ProductTitle";

describe('FindProductsByUser should', () => {

    let action: FindProductsByUser;
    let productRepository: ProductRepository;
    let results: Product[];

    test('find by userId', async () => {
        const userId = Uuid.create('1');

        given_an_action();

        await when_the_action_is_executed(userId);

        then_the_result_has_values();
    });

    function given_an_action() {
        productRepository = new InMemoryProductRepository();
        action = new FindProductsByUser(productRepository);
    }

    async function when_the_action_is_executed(userId: Uuid) {
        results = await action.execute(userId);
    }

    function then_the_result_has_values() {
        expect(results.length).toBe(2);
        expect(results[0].id).toBeEquals(Uuid.create('1'));
        expect(results[0].userId).toBeEquals(Uuid.create('1'));
        expect(results[0].title).toBeEquals(ProductTitle.create('Renault Stepway'));
        expect(results[0].categoryId).toBeEquals(Uuid.create('1'));

        expect(results[1].id).toBeEquals(Uuid.create('2'));
        expect(results[1].userId).toBeEquals(Uuid.create('1'));
        expect(results[1].title).toBeEquals(ProductTitle.create('Mazda 3'));
        expect(results[1].categoryId).toBeEquals(Uuid.create('1'));
    }
});
