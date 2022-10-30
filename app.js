import express from 'express';
import morgan from 'morgan';
const app = express();
const PORT = process.env.port || 3000;

import * as router from "./routes/starSign.js"

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/starSign", router);

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});