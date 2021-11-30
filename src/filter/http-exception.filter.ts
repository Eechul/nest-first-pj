import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response, Request } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const resp = ctx.getResponse<Response>();
        const req = ctx.getResponse<Request>();
        const status = exception.getStatus();
        
        resp
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: req.url
            })
    }
}