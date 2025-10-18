import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect_DB from "./config/MongoDB.js";
import monastery_routes from "./routes/Monastery.routes.js";
import event_routes from "./routes/Event.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connect_DB();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api/monasteries", monastery_routes);
app.use("/api/events", event_routes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
