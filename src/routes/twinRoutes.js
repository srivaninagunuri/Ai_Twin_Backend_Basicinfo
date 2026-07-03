const express = require("express");
const router = express.Router();

const { saveBasicInfo } = require("../controllers/twinController");

router.post("/basic-info", saveBasicInfo);

module.exports = router;