const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(1).required(),
        email: Joi.string().min(6).email().required(),
        phoneNumber: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(6).max(10).required(),
        confirmPassword: Joi.string().min(6).max(10).required(),
        pin: Joi.string().min(4).max(6).required()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).max(10).required(),
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;