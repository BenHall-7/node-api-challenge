function validateAction(req, res, next) {
    if (!req.params.id) {
        res.status(500).json({error: "The endpoint that used this middleware is missing an id parameter"});
        return;
    }

    if (typeof req.body == "object") {
        if (typeof req.body.description == "string" && typeof req.body.notes == "string") {
            next();
        } else {
            res.status(400).json({error: "Action is missing one or more required fields: 'description', 'notes'."});
        }
    } else {
        res.status(400).json({error: "missing request body"});
    }
}

module.exports = validateAction;