import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
import { createUser } from "../repositories/user.repository";

export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);

    const encryptedPassword: string = await bcrypt.hash(req.body.password, 10);
    req.body.password = encryptedPassword;

    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
