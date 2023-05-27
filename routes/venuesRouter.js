const express = require("express");
const router = express.Router();
const {
    getAll,
    postResource,
    getSingle,
    updateSingle,
    deleteSingle

} = require("../controller/venuecont");

router.get('/', getAll)



router.post('/', postResource)

router.post("/:id", getSingle)

// update a resource
router.patch("/:id", updateSingle)

router.delete("/:id", deleteSingle)

module.exports = router;