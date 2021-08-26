import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id: string;
}

class DeleteUsersService {

    async execute({ id }: IUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne(id);

        if (!user) {
            throw new Error("User not exists anymore");
        };

        await usersRepositories.delete(user.id);

        // return user;
    }
}

export { DeleteUsersService }
