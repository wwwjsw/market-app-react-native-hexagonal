import {InMemoryCategoryRepository} from "../../../../src/core/category/infrastructure/InMemoryCategoryRepository";
import {Uuid} from "../../../../src/core/shared/domain/Uuid";
import { FindAllCategories } from "../../../../src/core/category/application/FindAllCategories";
import { CategoryRepository } from "../../../../src/core/category/domain/CategoryRepository";
import { Category } from "../../../../src/core/category/domain/Category";
import {CategoryTitle} from "../../../../src/core/category/domain/CategoryTitle";

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
        expect(results[0].title).toBeEquals(CategoryTitle.create('Cars'));
    }
});
