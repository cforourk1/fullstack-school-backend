import morgan from "morgan";
import express from "express";
import cors from "cors";

const app = express();
export default app;




// middleware
app.use(express.json());
app.use(morgan("dev"));


//cors

app.use(cors({ origin: /localhost/ }));


