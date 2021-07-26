import express from "express";

import { createCourse } from "./routes";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", categoriesRoutes);

app.get("/", createCourse);

app.listen(3333, () => console.log("Server is Running"));
