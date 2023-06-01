import authRouter from "./auth";

const initRoutes = (app) => {
  app.use("/api/auth", authRouter);

  return app.use("/", (req, res) => {
    res.send("Hello dddWorld");
  });
};

export default initRoutes;
