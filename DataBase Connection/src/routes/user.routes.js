import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { loginUser } from "../controllers/user.controllers.js";
import { logoutUser } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from './../middlewares/auth.middleware.js';

const router = Router()

router.route("/register").post(
      (req, res, next) => {
        console.log("✅ Register route hit");
        next();
    },
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

// secure routes
router.route("/logout").post(verifyJWT, logoutUser)
export default router