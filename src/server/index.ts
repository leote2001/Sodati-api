import express from "express";
import cors from "cors";
import helmet from "helmet";

export const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json({limit: "50 mb"}));
app.use(express.urlencoded({extended: true, limit: "50 mb"}));

