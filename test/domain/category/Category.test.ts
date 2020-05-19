import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import {Category, CategoryTitleIsRequired, CategoryTitleMaxLength} from "../../../src/domain/category/Category";

describe('a category should', () => {
    test('can be created', () => {
        const uuid = Uuid.create('1');
        const title = 'Title';

        const category = new Category(uuid, title);

        expect(category.id).toBeEquals(uuid);
        expect(category.title).toBe(title);
    });

    test('validate that the title is required', () => {
        const uuid = Uuid.create('1');
        const title = '';

        const executor = () => new Category(uuid, title);

        expect(executor).toThrow(CategoryTitleIsRequired);
    });

    test('validate that the title length', () => {
        const uuid = Uuid.create('1');
        const title = 'un titulo que es muy largo y pasa la validacion xxxxx 2222 gggggggggg rrrrrrrrrrr tttttt sssss fffff ssss';

        const executor = () => new Category(uuid, title);

        expect(executor).toThrow(CategoryTitleMaxLength);
    });
});
