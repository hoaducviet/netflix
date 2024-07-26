const express = require("express");
const router = express.Router();
const userHomeController = require("../controllers/user/UserMovieController");

//Home
router.get("/home", userHomeController.home);
router.get(
  "/home/add/session/children/parent",
  userHomeController.addChildrenParentSession
);

//Đăng Ký
router.get("/register", userRegisterController.register);
router.delete("/register/:id", userRegisterController.registerDelete);
router.get("/register/injection", userRegisterController.registerInjection);
router.post(
  "/register/injection/submit",
  userRegisterController.registerInjectionSubmit
);
router.post(
  "/register/doctor/submit",
  userRegisterController.registerDoctorSubmit
);
router.get("/register/doctor", userRegisterController.registerDoctor);

//
module.exports = router;
