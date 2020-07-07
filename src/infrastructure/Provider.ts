import {InMemoryCategoryRepository} from "./domain/category/InMemoryCategoryRepository";
import {InMemoryProductRepository} from "./domain/product/InMemoryProductRepository";
import {InMemoryAuthenticationService} from "./domain/user/InMemoryAuthenticationService";
import {SignUp} from "../application/user/SignUp";
import {SignIn} from "../application/user/SignIn";
import {FindAllCategories} from "../application/category/FindAllCategories";
import {FindAllProducts} from "../application/market/FindAllProducts";
import {FindProductById} from "../application/market/FindProductById";
import {FindProductsByCategory} from "../application/market/FindProductsByCategory";
import {AddNewProductToMarket} from "../application/product/AddNewProductToMarket";
import {LocalUuidService} from "./domain/shared/uuid/LocalUuidService";
import {FindProductsByUser} from "../application/product/FindProductsByUser";

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
