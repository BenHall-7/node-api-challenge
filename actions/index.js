const express = require("express");
const helper = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
    helper.get()
        .then(res2 => res.status(200).json(res2))
        .catch(() => res.status(500).json({error: "Error retrieving actions"}))
})

module.exports = router;