const express =  require("express")
const coursecontroller  = require("../controller/course_controller")
const router  =  express.Router()

router.route("/")
.get(coursecontroller.getallCourse)
.post(coursecontroller.postnewCourse)

.delete(coursecontroller.deleteallCourse)

router.route("/:Courseid")
.get(coursecontroller.getCoursebyId)

.put(coursecontroller.editCoursebyId)
.delete(coursecontroller.deletebyId)

module.exports = router