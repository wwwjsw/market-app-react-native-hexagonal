import {ValueObject} from "../shared/ValueObject";

export class ProductDescription extends ValueObject<string> {
    static create(description: string): ProductDescription {
        return new ProductDescription(description);
    }
}

