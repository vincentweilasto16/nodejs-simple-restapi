import {
    createTestUser,
    removeTestUser,
    removeAllTestProducts
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";


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