import { create } from "../controllers/user.controller";

const userRoutes = (app: any) => {
  app.post("/v1/user", create);
};

export default userRoutes;
