import {Uuid} from "../shared/uuid/Uuid";
import {AggregateRoot} from "../shared/base/AggregateRoot";

export class Product extends AggregateRoot {
    private _userId: Uuid;
    private _title: string;
    private _description: string;
    private _categoryId: Uuid;
    private _images: string[];
    private _value: number;

    constructor(id: Uuid, userId: Uuid, title: string, description: string, categoryId: Uuid, images: string[], value: number) {
        super(id);
        this._userId = userId;
        this._title = title;
        this._description = description;
        this._categoryId = categoryId;
        this._images = images;
        this._value = value;
    }

    get userId(): Uuid {
        return this._userId;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get categoryId(): Uuid {
        return this._categoryId;
    }

    get images(): string[] {
        return this._images;
    }

    get value(): number {
        return this._value;
    }
}
