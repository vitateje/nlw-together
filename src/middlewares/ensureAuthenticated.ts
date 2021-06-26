import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o token
    const authToken = request.headers.authorization

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // definindo a segundo posição do array a variavel token
    const [, token] = authToken.split(" ")
    console.log(token)

    try {
        const { sub } = verify(token, "6fa18a0ac995377c6582912a7524018c") as IPayload;

        request.user_id = sub;

        return next();
    }

    catch (err) {
        return response.status(401).end();
    }









    // Validar se token é válido

    // Recuperar informações do usuario
};