import {CategoryRepository} from "../../domain/categories/CategoryRepository";
import {Category} from "../../domain/categories/Category";

export class FindAllCategories {
    constructor(private categoryRepository: CategoryRepository) {
    }

    execute(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}
