import {InvalidUuidError, Uuid} from "../../../src/domain/shared/Uuid";

describe('Uuid', () => {

    test('create a  Uuid', () => {
        const uuid = Uuid.create('1');

        expect(uuid).not.toBeNull();
        expect(uuid.value).not.toBeNull();
        expect(uuid.value).toBe('1');
    });

    test('two Uuid are equals', () => {
        const uuidA = Uuid.create('1');
        const uuidB = Uuid.create('1');

        expect(uuidA).toBeEquals(uuidB);
    });

    test('cannot create a empty uuid', () => {
        const execute = () => {
            Uuid.create('');
        };

        expect(execute).toThrow(InvalidUuidError);
    });
});
