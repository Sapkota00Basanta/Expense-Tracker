import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenses.js";
import { logger } from "./middlewares/logger.js";

const app = express();
dotenv.config();

app.use(logger);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/expenses-management", expenseRoutes);

// app.get('/', (req, res) => {res.json({message: "Welcome!"})})

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    })
  )
  .catch((err) => console.error(err.message));

mongoose.set("useFindAndModify", false);
export default app;
