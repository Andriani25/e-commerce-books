import { Router, Request, Response } from "express";
import User from "../../models/Users/Users";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  let { home, avatar } = req.body;

  if (password.length < 4) {
    res
      .status(400)
      .send("¡Las contraseñas tienen que ser más que 3 carácteres!");
  }

  const emailSearch = await User.findOne({ email: email });

  if (emailSearch) {
    res.status(400).send("¡Ese correo electrónico ya esta en uso!");
  }

  if (!home || !avatar) {
    home = "Calle Wallaby P Sherman 42 Sidney";
    avatar = "Avatar Image";
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    home,
    avatar,
  });

  newUser.password = await newUser.encryptPassword(password);

  await newUser.save();

  return res.status(200).send("¡Usuario creado!");
});

export default router;
