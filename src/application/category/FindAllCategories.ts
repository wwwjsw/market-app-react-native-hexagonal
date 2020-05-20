import {CategoryRepository} from "../../domain/category/CategoryRepository";
import {Category} from "../../domain/category/Category";

export class FindAllCategories {
    constructor(private categoryRepository: CategoryRepository) {
    }

    execute(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}
