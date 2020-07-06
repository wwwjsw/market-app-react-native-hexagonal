import {ValueObject} from "../shared/base/ValueObject";

export class CategoryTitle extends ValueObject<string> {
    static create(title: string): CategoryTitle {
        if (title === '') {
            throw new CategoryTitleIsRequired();
        }

        if (title.length > 100) {
            throw new CategoryTitleMaxLength();
        }

        return new CategoryTitle(title);
    }
}

export class CategoryTitleIsRequired extends Error {}

export class CategoryTitleMaxLength extends Error {}
