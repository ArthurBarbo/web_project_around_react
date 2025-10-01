import { Router } from "express";
import { signup } from "../components/Register/Register.js";
import { signin } from "../components/Login/Login.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

function ensureAuth(req, res, next) {
  if (!req.session?.user) {
    return res.redirect("/signin");
  }
  next();
}

router.get("/", ensureAuth, (req, res) => {
  res.send("Bem-vindo!");
});

export default router;
