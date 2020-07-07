import {ValueObject} from "../shared/ValueObject";

export class CategoryTitle extends ValueObject<string> {
    static create(title: string): CategoryTitle {
        return new CategoryTitle(title);
    }
}

