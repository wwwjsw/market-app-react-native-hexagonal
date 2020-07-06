import {Uuid} from "../../../src/domain/shared/uuid/Uuid";
import {
    CategoryTitle,
    CategoryTitleIsRequired,
    CategoryTitleMaxLength
} from "../../../src/domain/category/CategoryTitle";
import {Category} from "../../../src/domain/category/Category";

describe('a category should', () => {
    test('can be created', () => {
        const uuid = Uuid.create('1');
        const title = CategoryTitle.create('Title');

        const category = new Category(uuid, title);

        expect(category.id).toBeEquals(uuid);
        expect(category.title).toBe(title);
    });

    test('validate that the title is required', () => {
        const executor = () => CategoryTitle.create('');

        expect(executor).toThrow(CategoryTitleIsRequired);
    });

    test('validate that the title length', () => {
        const executor = () => CategoryTitle.create('un titulo que es muy largo y pasa la validacion xxxxx 2222 gggggggggg rrrrrrrrrrr tttttt sssss fffff ssss');

        expect(executor).toThrow(CategoryTitleMaxLength);
    });
});
