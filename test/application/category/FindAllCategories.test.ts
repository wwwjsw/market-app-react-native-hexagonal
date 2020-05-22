import {InMemoryCategoryRepository} from "../../../src/infrastructure/domain/category/InMemoryCategoryRepository";
import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import { FindAllCategories } from "../../../src/application/category/FindAllCategories";
import { CategoryRepository } from "../../../src/domain/category/CategoryRepository";
import { Category } from "../../../src/domain/category/Category";

describe('FindAllCategories should', () => {

    let action: FindAllCategories;
    let categoryRepository: CategoryRepository;
    let results: Category[];

    test('find all', async () => {
        given_an_action();

        await when_the_action_is_executed();

        then_the_result_has_values();
    });

    function given_an_action() {
        categoryRepository = new InMemoryCategoryRepository();
        action = new FindAllCategories(categoryRepository);
    }

    async function when_the_action_is_executed() {
        results = await action.execute();
    }

    function then_the_result_has_values() {
        expect(results.length).toBe(5);
        expect(results[0].id).toBeEquals(Uuid.create('1'));
        expect(results[0].title).toBe('Cars');
    }
});
