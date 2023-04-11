import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectToDataBase } from "./db/mongo-connection.js";
import router from "./router.const.js";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOST || "localhost";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOSTNAME, async (error) => {
  if (error) console.log(`Error while starting server`, error);

  await connectToDataBase();

  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
