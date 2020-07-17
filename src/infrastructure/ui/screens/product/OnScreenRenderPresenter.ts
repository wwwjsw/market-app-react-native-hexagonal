import {FindProductById} from "../../../../application/market/FindProductById";
import {ProductView} from "./ProductView";
import {Uuid} from "../../../../domain/shared/Uuid";

export class OnScreenRenderPresenter {

    constructor(private view: ProductView, private findProductById: FindProductById) {
    }

    async handle(productId: Uuid) {
        try {
            await this.tryToLoadProduct(productId);
        } catch (e) {
           //todo manejo de errores
            console.log(e);
        }
    }

    private async tryToLoadProduct(productId: Uuid) {
        const product = await this.findProductById.execute(productId);
        this.view.showProduct(product);
    }
}

