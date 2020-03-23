function validateProject(req, res, next) {
    if (typeof req.body == "object") {
        if (typeof req.body.name == "string" && typeof req.body.description == "string") {
            next();
        } else {
            res.status(400).json({error: "project is missing one or more required fields: 'name', 'description'."});
        }
    } else {
        res.status(400).json({error: "missing request body"});
    }
}

module.exports = validateProject;