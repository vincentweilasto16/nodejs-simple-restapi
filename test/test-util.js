import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    })
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

export const removeAllTestProducts = async () => {
    await prismaClient.product.deleteMany({
        where: {
            username: "test"
        }
    });
}

export const createTestProduct = async () => {
    await prismaClient.product.create({
        data: {
            username: "test",
            name: "Iphone X",
            description: "New Brand Iphone X",
            price: 800,
            quantity: 100,
            image_url: "https://iphone-x.png"
        }
    })
}

export const createManyTestProducts = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.product.create({
            data: {
                username: `test`,
                name: `product test ${i}`,
                description: `product description test ${i}`,
                price: 800 + i,
                quantity: 100 + i,
                image_url: `https://product-test${i}.png`
            }
        })
    }
}

export const getTestProduct = async () => {
    return prismaClient.product.findFirst({
        where: {
            username: 'test'
        }
    })
}
