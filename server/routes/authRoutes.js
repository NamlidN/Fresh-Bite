import express from "express";
import { register, login } from "../controller/authController.js";
const router = express.Router();

// POST Anfragen - weiterleitung an "register"
router.route("/register").post(register);
// POST Anfragen - weiterleitung an "login"
router.route("/login").post(login);

export default router;
