import { Request, Response } from "express"
import { UpdateUsersService } from "../services/UpdateUsersService"

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id, name, email, admin, password } = request.body;

        const updateUserService = new UpdateUsersService();

        const user = await updateUserService.execute({id, name, email, admin, password});

        return response.json(user)
    }
}

export { UpdateUserController };