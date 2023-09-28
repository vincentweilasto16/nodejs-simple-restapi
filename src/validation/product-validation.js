import Joi from "joi";

const createProductValidation = Joi.object({
    name: Joi.string().max(150).required(),
    description: Joi.string().optional(),
    price: Joi.number().positive().required(),
    quantity: Joi.number().positive().required(),
    image_url: Joi.string().max(255).optional()
});

const getProductValidation = Joi.number().positive().required();

const updateProductValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    name: Joi.string().max(150).required(),
    description: Joi.string().optional(),
    price: Joi.number().positive().required(),
    quantity: Joi.number().positive().required(),
    image_url: Joi.string().max(255).optional()
});

export{
    createProductValidation,
    getProductValidation,
    updateProductValidation
}