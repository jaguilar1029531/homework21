const router = require("express").Router();
const googlebooksController = require("../../controllers/googlebooksController");
//matches with "/api/googlebooks"
router.route("/")
.get(googlebooksController.findAll)
.post(googlebooksController.create);

// matches with "/api/googlebooks/:id"
router
.route("/:id")
// if its a get request do this
.get(googlebooksController.findById)
// if its a put request do this
.put(googlebooksController.remove)
// if its a delete request do this
.delete(googlebooksController.remove);

module.exports = router;

// api/googlebooks and the /:id above are the two URLs we can reach