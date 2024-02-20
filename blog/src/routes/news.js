const router = require("express").Router();

const newsController = require("../app/controller/NewsController");

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
