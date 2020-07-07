import {ValueObject} from "../shared/ValueObject";

export class ProductTitle extends ValueObject<string> {
    static create(title: string): ProductTitle {
        return new ProductTitle(title);
    }
}

