const express = import("express");
const morgan = import("morgan");
const app = express();
const PORT = process.env.port || 3000;

const placeholderRouter;
const seccondRouter;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

// app.use("/api/placeholderRouter", placeholderRouter);
// app.use("api/seccondRouter", seccondRouter);

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});