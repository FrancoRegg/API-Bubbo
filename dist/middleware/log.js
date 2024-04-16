"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    try {
        const userAgent = req.headers['user-agent'];
        const ip = req.socket.remoteAddress;
        if (userAgent && ip) {
            console.log(`[${new Date().toISOString()}] ${ip} - ${userAgent} - ${req.method} ${req.originalUrl}`);
        }
        else {
            console.log(`[${new Date().toISOString()}] Failed to retrieve user-agent or IP address.`);
        }
    }
    catch (error) {
        console.error(`Error in logMiddleware: ${error}`);
    }
    finally {
        next();
    }
};
exports.logMiddleware = logMiddleware;
