import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const userController = new UserController();
const surveysController = new SurveysController();

const routes = Router();

const sendMailController = new SendMailController();

routes.post("/createuser", userController.create);
routes.post("/surveys", surveysController.create);
routes.post("/sendmail", sendMailController.execute);

routes.get("/surveys", surveysController.show);
routes.get("/users", userController.show);

export { routes };
