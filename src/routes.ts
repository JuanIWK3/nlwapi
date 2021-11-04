import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const userController = new UserController();
const surveysController = new SurveysController();

const routes = Router();

routes.post("/createuser", userController.create);
routes.post("/surveys", surveysController.create);

routes.get("/surveys", surveysController.show);

export { routes };
