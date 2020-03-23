const express = require("express");
const helper = require("../data/helpers/actionModel");
const validateActionID = require("../middleware/validateActionID");
const validateAction = require("../middleware/validateAction");

const router = express.Router();

router.get("/", (_, res) => {
    helper.get()
        .then(res2 => res.status(200).json(res2))
        .catch(() => res.status(500).json({error: "Error retrieving actions"}));
})

router.get("/:id", validateActionID, (_, res) => {
    res.status(200).json(res.action);
})

router.put("/:id", validateActionID, validateAction, (req, res) => {
    helper.update(req.action.id)
        .then(res2 => {
            if (res2) {
                res.status(200).json(res2);
            } else {
                res.status(500).json({error: "unable to update action"});
            }
        })
        .catch(() => res.status(500).json({error: "unable to update action"}))
})

router.delete("/:id", validateActionID, (req, res) => {
    helper.remove(req.action.id)
        .then(res2 => {
            if (res2) {
                res.sendStatus(204);
            } else {
                res.status(500).json({error: "unable to delete action"});
            }
        })
        .catch(() => res.status(500).json({error: "unable to delete action"}))
})

module.exports = router;