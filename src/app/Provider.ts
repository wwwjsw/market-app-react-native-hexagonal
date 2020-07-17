import {InMemoryCategoryRepository} from "../core/category/infrastructure/InMemoryCategoryRepository";
import {InMemoryProductRepository} from "../core/product/infrastructure/InMemoryProductRepository";
import {InMemoryAuthenticationService} from "../core/user/infrastructure/InMemoryAuthenticationService";
import {SignUp} from "../core/user/application/SignUp";
import {SignIn} from "../core/user/application/SignIn";
import {FindAllCategories} from "../core/category/application/FindAllCategories";
import {FindAllProducts} from "../core/product/application/FindAllProducts";
import {FindProductById} from "../core/product/application/FindProductById";
import {FindProductsByCategory} from "../core/product/application/FindProductsByCategory";
import {AddNewProductToMarket} from "../core/product/application/AddNewProductToMarket";
import {LocalUuidService} from "../core/shared/infrastructure/LocalUuidService";
import {FindProductsByUser} from "../core/product/application/FindProductsByUser";

// Repositories
const categoryRepository = new InMemoryCategoryRepository();
const productRepository = new InMemoryProductRepository();

// Infrastructure Services
const authenticationService = new InMemoryAuthenticationService();
const uuidService = new LocalUuidService();

// Application Services
//user
const signUp = new SignUp(authenticationService);
const signIn = new SignIn(authenticationService);

//category
const findAllCategories = new FindAllCategories(categoryRepository);

//market
const findAllProducts = new FindAllProducts(productRepository);
const findProductById = new FindProductById(productRepository);
const findProductsByCategory = new FindProductsByCategory(productRepository);

//product
const addNewProductToMarket = new AddNewProductToMarket(productRepository, uuidService);
const findProductsByUser = new FindProductsByUser(productRepository);

export const provider: Provider = {
    signUp,
    signIn,
    findAllCategories,
    findAllProducts,
    findProductById,
    findProductsByCategory,
    addNewProductToMarket,
    findProductsByUser
};

export interface Provider {
    signUp: SignUp;
    signIn: SignIn;
    findAllCategories: FindAllCategories,
    findAllProducts: FindAllProducts,
    findProductById: FindProductById,
    findProductsByCategory: FindProductsByCategory,
    addNewProductToMarket: AddNewProductToMarket,
    findProductsByUser: FindProductsByUser
}
