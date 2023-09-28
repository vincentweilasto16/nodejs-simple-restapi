import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const get = async (req, res, next) => {
    try {
        const username = req.user.username;
        const result = await userService.get(username);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        const result = await userService.logout(req.user.username);
        res.status(200).json({
            data: "OK"
        });
    } catch (error) {
        next(error);
    }
}

export default{
    register,
    login,
    get,
    logout
}