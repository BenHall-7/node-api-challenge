const helper = require("../data/helpers/projectModel");

function validateProjectID(req, res, next) {
    const id = req.params.id;
    helper.get(id)
        .then(res2 => {
            if (res2) {
                req.project = res2;
                next();
            } else {
                res.status(400).json({error: "project id not found"});
            }
        })
        .catch(() => {
            res.status(400).json({error: "invalid project id"});
        })
}

module.exports = validateProjectID;