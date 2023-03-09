import { Router, Request, Response } from "express";
import Users from "../../models/Users/Users";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const usersInfo = await Users.find({}).select({
      firstName: 1,
      lastName: 1,
      email: 1,
      password: 1,
      home: 1,
      avatar: 1,
      shoppingCart: 1,
    });

    console.log("Users Info", usersInfo);

    res.status(200).send(usersInfo);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default router;
