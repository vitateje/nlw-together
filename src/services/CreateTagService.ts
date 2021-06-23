import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

interface IUserRequest {
    name: string;
}

class CreateTagService {

    async execute({ name }: IUserRequest) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error("Incorrect Name");
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name,
        });

        if(tagAlreadyExists) {
            throw new Error("Tag already exists");
        }
        const tag = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }