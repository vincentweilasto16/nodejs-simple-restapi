import {validate} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";
import {
    createProductValidation,
    updateProductValidation
} from "../validation/product-validation.js";

const create = async (user, request) => {
    const product = validate(createProductValidation, request);
    product.username = user.username;

    return prismaClient.product.create({
        data: product,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            quantity: true,
            image_url: true,
        }
    });
}

const update = async (user, request) => {
    const product = validate(updateProductValidation, request);

    const totalProductInDatabase = await prismaClient.product.count({
        where: {
            username: user.username,
            id: product.id
        }
    });

    if (totalProductInDatabase !== 1) {
        throw new ResponseError(404, "product is not found");
    }

    return prismaClient.product.update({
        where: {
            id: product.id
        },
        data: {
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image_url: product.image_url,
        },
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            quantity: true,
            image_url: true,
        }
    })
}

export default {
    create,
    update
}