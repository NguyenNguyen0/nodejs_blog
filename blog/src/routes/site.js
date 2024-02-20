const router = require("express").Router();

const SiteController = require("../app/controller/SiteController")

router.use("/search", SiteController.search);
router.use("/", SiteController.index);

module.exports = router