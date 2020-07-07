import {ValueObject} from "../../../src/domain/shared/ValueObject";


class TestValueObject extends ValueObject <string> {
    static create(value: string) {
        return new TestValueObject(value);
    }
}

describe('ValueObject should', () => {

    test('can create a value objects', () => {
        const valueObject = TestValueObject.create('demo');

        expect(valueObject).not.toBeNull();
        expect(valueObject.value).toBe('demo');
    });

    test('test to string', () => {
        const email = TestValueObject.create('demo');

        expect(email.toString()).toBe('Value:demo')
    });

    test('two value objects are equals', () => {
        const valueObjectA = TestValueObject.create('demo');
        const valueObjectB = TestValueObject.create('demo');

        expect(valueObjectA).toBeEquals(valueObjectB);
    });

    test('two value objects are not equals', () => {
        const valueObjectA = TestValueObject.create('demo');
        const valueObjectB = TestValueObject.create('demo1');

        expect(valueObjectA).not.toBeEquals(valueObjectB);
    });
});
