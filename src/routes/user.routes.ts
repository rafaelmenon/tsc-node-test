import {
  create,
  get,
  getId,
  update,
  remove,
} from "../controllers/user.controller";

const userRoutes = (app: any) => {
  app.post("/v1/user", create);
  app.get("/v1/user", get);
  app.get("/v1/user/:id", getId);
  app.put("/v1/user/:id", update);
  app.delete("/v1/user/:id", remove);
};

export default userRoutes;
