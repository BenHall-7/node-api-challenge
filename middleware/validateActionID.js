const helper = require("../data/helpers/actionModel");

function validateActionID(req, res, next) {
    const id = req.params.id;
    helper.get(id)
        .then(res2 => {
            if (res2) {
                console.log(res2)
                req.action = res2;
                next();
            } else {
                res.status(400).json({error: "action id not found"});
            }
        })
        .catch(() => {
            res.status(400).json({error: "invalid action id"});
        })
}

module.exports = validateActionID;