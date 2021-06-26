import { Request, Response, NextFunction } from "express"

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o token

    // Validar se token está preenchido

    // Validar se token é válido

    // Recuperar informações do usuario
};