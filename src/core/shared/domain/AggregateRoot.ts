import {Uuid} from "./Uuid";

export abstract class AggregateRoot {
    private readonly _id: Uuid;

    protected constructor(id: Uuid) {
        this._id = id;
    }

    get id(): Uuid {
        return this._id;
    }
}
