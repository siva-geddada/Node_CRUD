const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/signup", function (req, res) {
  userCtrl.signUp(req, res);
});
router.post("/verifyEmail", function (req, res) {
  userCtrl.verifyEmail(req, res);
});
router.get("/getAllUsers", function (req, res) {
  userCtrl.getAllUsers(req, res);
});
router.get("/getUser/:id", function (req, res) {
  userCtrl.getUser(req, res);
});
router.get("/getUser/:id", function (req, res) {
  userCtrl.getUser(req, res);
});
router.delete("/deleteUser/:id", function (req, res) {
  userCtrl.deleteUser(req, res);
});
router.post("/updateUser/:id", function (req, res) {
  userCtrl.updateUser(req, res);
});


module.exports = router;
