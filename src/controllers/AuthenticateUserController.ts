import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const createTagService = new AuthenticateUserService();

        const token = await createTagService.execute({
            email, 
            password
        });

        return response.json(token)
    }
}

export { AuthenticateUserController };