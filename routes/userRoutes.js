const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controller/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser); //when only "current" route is private, do like this i.e include that 'validateToken' middlware

module.exports = router;
