
const { mutipleMongooseToObject, mongooseToObject } = require('../utils/mongoose');

class SiteController {
   
    signIn(req, res) {
        res.render('sign-in');
    }
    


}
module.exports = new SiteController();
