const router = require("express").Router()
const articlesRoutes = require("./articles")

//set sub route for articles under api
router.use("/articles", articlesRoutes)

module.exports = router