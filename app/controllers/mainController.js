const { validationResult } = require("express-validator");

exports.add=async (req, res) => {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const param1 = req.query.param1;
        const param2 = req.query.param2;

        let sum = parseInt(param1) + parseInt(param2);

        res.status(200).json({
            status:true,
            sum: sum
        });
    }
    catch (error) {
        res.status(error.status).json({
            status:false,
            message: error.message
        });
    }
}