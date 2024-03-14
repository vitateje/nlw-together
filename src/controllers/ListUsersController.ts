import { request, Request, Response } from "express"
import { ListUserService } from "../services/ListUsersService";


class ListUsersController {
    async handle( request: Request, response: Response) {


        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        // console.log(users)

        // const userItems = users.filter( User => User.id === "f8f8c2a3-14b1-4510-884a-7288de871866");

        // console.log(userItems)

        console.log(request)

        return response.json(users);
    }
}

export { ListUsersController }