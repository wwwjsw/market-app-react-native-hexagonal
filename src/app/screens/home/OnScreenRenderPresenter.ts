import {HomeView} from "./HomeView";
import {FindAllCategories} from "../../../core/category/application/FindAllCategories";
import {FindAllProducts} from "../../../core/product/application/FindAllProducts";

export class OnScreenRenderPresenter {
    private view: HomeView;
    private findAllCategories: FindAllCategories;
    private findAllProducts: FindAllProducts;

    constructor(view: HomeView, findAllCategories: FindAllCategories, findAllProducts: FindAllProducts) {
        this.view = view;
        this.findAllCategories = findAllCategories;
        this.findAllProducts = findAllProducts;
    }

    async handle() {
        try {
            await this.tryToLoadCategories();
            await this.tryToLoadProducts();
        } catch (e) {
           //todo manejo de errores
            console.log(e);
        }
    }

    private async tryToLoadCategories() {
        const categories = await this.findAllCategories.execute();
        this.view.showCategories(categories);
    }

    private async tryToLoadProducts() {
        const products = await this.findAllProducts.execute();
        this.view.showProducts(products);
    }
}

