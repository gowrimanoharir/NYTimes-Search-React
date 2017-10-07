const router = require("express").Router()
const articlesController = require("../../controllers/articlesController")

//set required sub routes for api/articles
router.route("/")
.get(articlesController.findAll) //route to get saved articles
.post(articlesController.create) //route to save a new article


router.route("/:id")
.delete(articlesController.delete) //route to delete a saved article

module.exports = router;