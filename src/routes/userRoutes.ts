import { Router } from "express"
import getUsersController from "../controllers/User/getAll";

import { validateAuth, validateSchemaMiddleware } from "../middlewares";
import { userSchema } from "../schemas";
import { createUserController, deleteUserController
} from "../controllers/User";

const userRoutes = Router()

userRoutes.get("", getUsersController)
userRoutes.get("/profile")
userRoutes.post("/register",
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post("/login")
userRoutes.post("/signup")
userRoutes.post("/logout")
userRoutes.patch("")
userRoutes.delete("", validateAuth, deleteUserController)


export default userRoutes