import {
    createTestUser,
    removeTestUser,
    removeAllTestProducts,
    createTestProduct,
    getTestProduct
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import { logger } from "../src/application/logging.js";


// Create Product API TEST
describe('POST /api/products', function () {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeAllTestProducts();
        await removeTestUser();
    })

    it('should can create new product', async () => {
        const result = await supertest(web)
            .post("/api/products")
            .set('Authorization', 'test')
            .send({
                name: "Iphone X",
                description: "New Brand Iphone X",
                price: 800,
                quantity: 100,
                image_url: "https://iphone-x.png"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.name).toBe("Iphone X");
        expect(result.body.data.description).toBe("New Brand Iphone X");
        expect(result.body.data.price).toBe(800);
        expect(result.body.data.quantity).toBe(100);
        expect(result.body.data.image_url).toBe("https://iphone-x.png");
    });

    it('should reject if request is not valid', async () => {
        const result = await supertest(web)
            .post("/api/products")
            .set('Authorization', 'test')
            .send({
                name: "",
                description: "New Brand Iphone X",
                price: 800,
                quantity: 100,
                image_url: "https://iphone-x.png"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

// Update Product API TEST
describe('PUT /api/products/:productId', function () {
    beforeEach(async () => {
        await createTestUser();
        await createTestProduct();
    })

    afterEach(async () => {
        await removeAllTestProducts();
        await removeTestUser();
    })

    it('should can update existing product', async () => {
        const testProduct = await getTestProduct();

        const result = await supertest(web)
            .put('/api/products/' + testProduct.id)
            .set('Authorization', 'test')
            .send({
                name: "Iphone X Gold",
                description: "New Brand Iphone X Gold",
                price: 850,
                quantity: 50,
                image_url: "https://iphone-x-gold.png"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testProduct.id);
        expect(result.body.data.name).toBe("Iphone X Gold");
        expect(result.body.data.description).toBe("New Brand Iphone X Gold");
        expect(result.body.data.price).toBe(850);
        expect(result.body.data.quantity).toBe(50);
        expect(result.body.data.image_url).toBe("https://iphone-x-gold.png");
    });

    it('should reject if request is invalid', async () => {
        const testProduct = await getTestProduct();

        const result = await supertest(web)
            .put('/api/products/' + testProduct.id)
            .set('Authorization', 'test')
            .send({
                name: "",
                description: "New Brand Iphone X Gold",
                image_url: "https://iphone-x-gold.png"
            });

        expect(result.status).toBe(400);
    });

    it('should reject if product is not found', async () => {
        const testProduct = await getTestProduct();

        const result = await supertest(web)
            .put('/api/products/' + (testProduct.id + 1))
            .set('Authorization', 'test')
            .send({
                name: "Iphone X Gold",
                description: "New Brand Iphone X Gold",
                price: 850,
                quantity: 50,
                image_url: "https://iphone-x-gold.png"
            });

        logger.info(result.body.errors);

        expect(result.status).toBe(404);
    });
});