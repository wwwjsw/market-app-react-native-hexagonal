
import data from './categories.json';
import {Uuid} from "../../../domain/shared/Uuid";
import {CategoryRepository} from "../../../domain/category/CategoryRepository";
import {Category} from "../../../domain/category/Category";
import {CategoryTitle} from "../../../domain/category/CategoryTitle";

export class InMemoryCategoryRepository implements CategoryRepository {
    private _database: Category[];

    constructor() {
        this._database = getMockData();
    }

    findAll(): Promise<Category[]> {
        return Promise.resolve(this._database.splice(0));
    }
}

const getMockData = () => {
    const database: Category[] = data.map((row) => {
        const id = Uuid.create(row.id);
        const title = CategoryTitle.create(row.title);

        return new Category(id, title);
    });
    return database;
};
