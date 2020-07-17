import {ValueObject} from "../../shared/domain/ValueObject";

export class ProductValue extends ValueObject<number> {
    static create(value: number): ProductValue {
        return new ProductValue(value);
    }
}

