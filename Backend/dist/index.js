import express from "express";
import { userRouter } from "./routes/user.js";
import { brainRouter } from "./routes/brain.js";
const app = express();
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("api/v1", brainRouter);
app.listen(3000);
//# sourceMappingURL=index.js.map