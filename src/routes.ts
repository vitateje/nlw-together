import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentService } from "./services/CreateComplimentService";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);

// middlewares: fica entre a requisição e a resposta - ensureAdmin ( pode interceptar ou seguir a frente )
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post("/login", authenticateUserController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

export { router };