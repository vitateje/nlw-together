import { Request, Response } from "express"
import { DeleteUsersService } from "../services/DeleteUsersService"

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const DeleteUserService = new DeleteUsersService();

        const user = await DeleteUserService.execute({ id });

        return response.json(user)
    }
}

export { DeleteUserController };