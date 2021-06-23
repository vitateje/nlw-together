import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);

// middlewares: fica entre a requisição e a resposta - ensureAdmin ( pode interceptar ou seguir a frente )
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };