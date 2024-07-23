const express = require('express');
const router = express.Router();
const userHomeController = require('../controllers/user/UserHomeController');
const userRegisterController = require('../controllers/user/UserRegisterController');
const userProfileController = require('../controllers/user/UserProfileController');


//Home
router.get('/home', userHomeController.home);
router.get('/home/add/session/children/parent', userHomeController.addChildrenParentSession);



//Đăng Ký
router.get('/register', userRegisterController.register);
router.delete('/register/:id', userRegisterController.registerDelete);
router.get('/register/injection', userRegisterController.registerInjection);
router.post('/register/injection/submit', userRegisterController.registerInjectionSubmit);
router.post('/register/doctor/submit', userRegisterController.registerDoctorSubmit);
router.get('/register/doctor', userRegisterController.registerDoctor);


//Hồ Sơ
router.get('/profile', userProfileController.profile);
router.get('/profile/edit/parent', userProfileController.profileEditParent);
router.put('/profile/update/parent', userProfileController.profileUpdateParent);
router.get('/profile/edit/children/:id', userProfileController.profileEditChildren);
router.put('/profile/update/children/:id', userProfileController.profileUpdateChildren);
router.get('/profile/add/children', userProfileController.profileAddChildren);
router.post('/profile/store/new/children', userProfileController.profileStoreNewChildren);


module.exports = router;
