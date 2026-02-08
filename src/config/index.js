import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

export {PORT};

export {default as Logger} from "./logger-config.js";