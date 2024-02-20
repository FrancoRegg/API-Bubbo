import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const userAgent = req.headers['user-agent'];
        const ip = req.socket.remoteAddress;

        if (userAgent && ip) {
            console.log(`[${new Date().toISOString()}] ${ip} - ${userAgent} - ${req.method} ${req.originalUrl}`);
        } else {
            console.log(`[${new Date().toISOString()}] Failed to retrieve user-agent or IP address.`);
        }
    } catch (error) {
        console.error(`Error in logMiddleware: ${error}`);
    } finally {
        next();
    }
};

export { logMiddleware };