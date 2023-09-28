import {validate} from "../validation/validation.js";
import {createProductValidation} from "../validation/product-validation.js";
import {prismaClient} from "../application/database.js";

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

export default {
    create
}