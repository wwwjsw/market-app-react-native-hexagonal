
import data from './categories.json';
import {Uuid} from "../../shared/domain/Uuid";
import {CategoryRepository} from "../domain/CategoryRepository";
import {Category} from "../domain/Category";
import {CategoryTitle} from "../domain/CategoryTitle";

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
