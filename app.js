import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRouter.js";
import mongoose from "mongoose";
import usersRouter from "./routes/usersRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use("/", mainRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
 }); 


app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});