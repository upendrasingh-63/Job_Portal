import express from 'express';
import { register, login, logout, updateProfile } from '../controllers/users.controller.js';
import { singleupload } from '../middlewares/mutler.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(singleupload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated, singleupload, updateProfile);

export default router;