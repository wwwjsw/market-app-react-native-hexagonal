import {Uuid} from "../../../../src/core/shared/domain/Uuid";
import {ProductRepository} from "../../../../src/core/product/domain/ProductRepository";
import {InMemoryProductRepository} from "../../../../src/core/product/infrastructure/InMemoryProductRepository";
import {AddNewProductToMarket} from "../../../../src/core/product/application/AddNewProductToMarket";
import {UuidService} from "../../../../src/core/shared/domain/UuidService";
import {mock, instance, when} from "ts-mockito";
import {ProductDescription} from "../../../../src/core/product/domain/ProductDescription";
import {ProductTitle} from "../../../../src/core/product/domain/ProductTitle";
import {ProductValue} from "../../../../src/core/product/domain/ProductValue";

describe('AddNewProduct should', () => {

    let action: AddNewProductToMarket;
    let uuidService: UuidService;
    let productRepository: ProductRepository;

    test('store a new product', async () => {
        const id = Uuid.create('70')
        const userId = Uuid.create('2');
        const title = 'Product A';
        const description = 'description';
        const categoryId = Uuid.create('2');
        const images = ['image1', 'image2'];
        const value = 5;

        given_an_action();
        and_this_uuid(id);

        await when_the_action_is_executed(
            userId,
            title,
            description,
            categoryId,
            images,
            value
        );

        await then_the_the_repository_was_called_with_this_data(
            id,
            userId,
            title,
            description,
            categoryId,
            images,
            value
        );
    });

    function given_an_action() {
        uuidService = mock<UuidService>();
        productRepository = new InMemoryProductRepository();
        action = new AddNewProductToMarket(productRepository, instance(uuidService));
    }

    function and_this_uuid(uuid: Uuid) {
        when(uuidService.nextId()).thenReturn(uuid);
    }

    async function when_the_action_is_executed(userId: Uuid, title: string, description: string, categoryId: Uuid, images: string[], value: number) {
        await action.execute(
            userId,
            title,
            description,
            categoryId,
            images,
            value
        );
    }

    async function then_the_the_repository_was_called_with_this_data(id: Uuid, userId: Uuid, title: string, description: string, categoryId: Uuid, images: string[], value: number) {
        const result = await productRepository.findById(id);

        expect(result).not.toBeUndefined();
        expect(result!.id).toBeEquals(id);
        expect(result!.userId).toBeEquals(userId);
        expect(result!.title).toBeEquals(ProductTitle.create(title));
        expect(result!.description).toBeEquals(ProductDescription.create(description));
        expect(result!.categoryId).toBeEquals(categoryId);
        expect(result!.images).toBe(images);
        expect(result!.value).toBeEquals(ProductValue.create(value));
    }
});
