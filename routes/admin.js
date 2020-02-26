const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

// /api/admin

router.get("/", authMiddleware, async (req, res) => {
    try {

        res.json("Admin Page");
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
