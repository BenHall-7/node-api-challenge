const express = require("express");
const helper = require("../data/helpers/projectModel");
const validateProjectID = require("../middleware/validateProjectID");
const validateProject = require("../middleware/validateProject");

const router = express.Router();

router.get("/", (_, res) => {
    helper.get()
        .then(res2 => res.status(200).json(res2))
        .catch(() => res.status(500).json({error: "Error retrieving projects"}));
})

router.get("/:id", validateProjectID, (req, res) => {
    res.status(200).json(req.project);
})

router.get("/:id/actions", validateProjectID, (req, res) => {
    helper.getProjectActions(req.project.id)
        .then(res2 => {
            if (res2) {
                res.status(200).json(res);
            } else {
                res.status(500).json({error: "Error retrieving project actions"})
            }
        })
        .catch(() => res.status(500).json({error: "Error retrieving project actions"}))
})

router.post("/", validateProject, (req, res) => {
    helper.insert(req.body)
        .then(res2 => res.status(201).json(res2))
        .catch(() => res.status(500).json({error: "unable to post project"}));
})

router.put("/:id", validateProjectID, validateProject, (req, res) => {
    helper.update(req.project.id)
        .then(res2 => {
            if (res2) {
                res.status(200).json(res2);
            } else {
                res.status(500).json({error: "unable to update project"});
            }
        })
        .catch(() => res.status(500).json({error: "unable to update project"}))
})

router.delete("/:id", validateProjectID, (req, res) => {
    helper.remove(req.project.id)
        .then(res2 => {
            if (res2) {
                res.sendStatus(204);
            } else {
                res.status(500).json({error: "unable to delete project"});
            }
        })
        .catch(() => res.status(500).json({error: "unable to delete project"}))
})

module.exports = router;