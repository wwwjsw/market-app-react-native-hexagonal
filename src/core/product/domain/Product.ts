import {Uuid} from "../../shared/domain/Uuid";
import {AggregateRoot} from "../../shared/domain/AggregateRoot";
import {ProductTitle} from "./ProductTitle";
import {ProductDescription} from "./ProductDescription";
import {ProductValue} from "./ProductValue";

export class Product extends AggregateRoot {
    private _userId: Uuid;
    private _title: ProductTitle;
    private _description: ProductDescription;
    private _categoryId: Uuid;
    private _images: string[];
    private _value: ProductValue;

    constructor(id: Uuid, userId: Uuid, title: ProductTitle, description: ProductDescription, categoryId: Uuid, images: string[], value: ProductValue) {
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

    get title(): ProductTitle {
        return this._title;
    }

    get description(): ProductDescription {
        return this._description;
    }

    get categoryId(): Uuid {
        return this._categoryId;
    }

    get images(): string[] {
        return this._images;
    }

    get value(): ProductValue {
        return this._value;
    }
}
