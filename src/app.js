const express = require("express");
const twinRoutes = require("./routes/twinRoutes");

const app = express();

app.use(express.json());

app.use("/api/twin", twinRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "AI Twin Backend Running Successfully"
    });
});

module.exports = app; 