import {AggregateRoot} from "../shared/base/AggregateRoot";
import {Uuid} from "../shared/uuid/Uuid";

export class Category extends AggregateRoot {
    private _title!: string;

    constructor(id: Uuid, title: string) {
        super(id);
        this.setTitle(title);
    }

    setTitle(title: string): void {
        if (title === '') {
            throw new CategoryTitleIsRequired();
        }

        if (title.length > 100) {
            throw new CategoryTitleMaxLength();
        }

        this._title = title;
    }

    get title(): string {
        return this._title;
    }
}

export class CategoryTitleIsRequired extends Error {
}

export class CategoryTitleMaxLength extends Error {
}
