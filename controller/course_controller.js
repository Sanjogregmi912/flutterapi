
const Course =  require("../model/Course")

const getallCourse = ((req,res,next)=>{
    Course.find().then((course)=>{
        res.json(course)
    })
    .catch(
        next
    )

} )

const postnewCourse = ((req,res,next)=>{
    
    Course.create(req.body).then((course)=>{
        res.json(course)

    })
    .catch(next)

})

const deleteallCourse =((req,res,next)=>{
    Course.deleteMany().then((reply)=>{
        res.json(reply)
    }).catch(next)

})

const getCoursebyId =((req,res,next)=>{
    Course.findById(req.params.Courseid).then((course)=>{
        res.json(course)
    }).catch(next)

})

const editCoursebyId =((req,res,next)=>{
    Course.findByIdAndUpdate(req.params.Courseid,{$set:req.body},{new:true}).then((course)=>{
        res.json(course)
    }).catch(next)

})

const deletebyId = ((req,res,next)=>{
    Course.findByIdAndRemove(req.params.Courseid).then((reply)=>{
        res.json(reply)
    }).catch(next)
})

module.exports = {getallCourse,postnewCourse,deleteallCourse,getCoursebyId,editCoursebyId,deletebyId}