import {Uuid} from "../shared/Uuid";
import {Product} from "./Product";

export interface ProductRepository {
    store(product: Product): Promise<void>;
    findByUser(userId: Uuid): Promise<Product[]>;
    findById(id: Uuid): Promise<Product | undefined>;
    findAll(): Promise<Product[]>;
    findByCategory(categoryId: Uuid): Promise<Product[]>;
}
