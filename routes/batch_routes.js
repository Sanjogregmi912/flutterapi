const express =  require("express")
const batchcontroller =  require("../controller/batch_controller")
const router =  express.Router()

router.route("/")
.get(batchcontroller.getallbatch)
.post(batchcontroller.postnewbatch)
.delete(batchcontroller.deleteallbatch)


router.route("/:batchid")
.get(batchcontroller.getbatchbyId)
.put(batchcontroller.editbatchbyId)
.delete(batchcontroller.deletebyId)
module.exports = router