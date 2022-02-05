import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});