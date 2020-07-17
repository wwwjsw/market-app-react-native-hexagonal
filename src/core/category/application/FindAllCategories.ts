import {CategoryRepository} from "../domain/CategoryRepository";
import {Category} from "../domain/Category";

export class FindAllCategories {
    constructor(private categoryRepository: CategoryRepository) {
    }

    execute(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}
