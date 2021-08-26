import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"

interface IUserRequest {
    id: string;
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

class UpdateUsersService {

    async execute({ id, name, email, admin = false, password }: IUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const emailAlreadyExists = await usersRepositories.findOne({
            email,
        });

        if (emailAlreadyExists) {
            throw new Error("Email already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = await usersRepositories.findOne(id);

        user.name = name;
        user.email = email;
        user.admin = admin;
        user.password = passwordHash;

        await usersRepositories.save(user);

        return user;
    }
}

export { UpdateUsersService }
