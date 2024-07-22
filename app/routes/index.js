const router  = require('express').Router();
//required controllers
const userController = require('../controllers/mainController');
const authMiddleware = require('../middlewares/authMiddleware');
const { param } = require("express-validator");

//routes
router.use(authMiddleware.authenticateTokenApi)
router.get('/sum',[
    [
        param("param1").notEmpty().isNumeric,
        param("param2").notEmpty().isNumeric,
    ],
] ,userController.add);

// export to use in server.js
module.exports = router;