import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

var cors = require('cors')

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/users", cors(), createUserController.handle);

router.put("/users/:id", cors(), updateUserController.handle);

router.delete("/users/:id", cors(), deleteUserController.handle);

// middlewares: fica entre a requisição e a resposta - ensureAdmin ( pode interceptar uma requisição )
router.post("/tags", cors(), ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post("/login", cors(),  authenticateUserController.handle);

router.post("/compliments", cors(), ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", cors(), ensureAuthenticated, listUserSendComplimentsController.handle );

router.get("/users/compliments/receive", cors(), ensureAuthenticated, listUserReceiveComplimentsController.handle);

router.get("/tags", cors(), ensureAuthenticated, listTagsController.handle);

router.get("/users", cors(), listUsersController.handle);

export { router };