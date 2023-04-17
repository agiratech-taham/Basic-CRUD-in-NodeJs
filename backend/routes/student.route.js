let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", async (req, res, next) => {
	console.log('req', req.body)


	studentSchema.create(req.body).then(data =>{
		res.json(data);
	})

});

// READ Students
router.get("/", async (req, res,next) => {

	studentSchema.find({}).then(data => {
		res.json(data)
	}).catch(err => {
		next(err)
	})
});

// UPDATE student
router
.route("/update-student/:id")
.get((req, res,next) => {
// 	Student.findById(
// 		req.params.id, (error, data) 
// 			.then((data) =>{
// 				res.json(data);
// 			})
// 			.catch((error) =>{
// 				// return next(error);
// res.status(404).send('Error 404!')

// 			})
		
// 			);
studentSchema.findById({}).then(data => {
	res.json(data)
}).catch(err => {
	next(err)
})

})

// Update Student Data
.put((req, res, next) => {
// 	Student.findByIdAndUpdate(
// 	req.params.id,
// 	{
// 		$set: req.body,
// 	},
// 	(error, data) 
// 		.then((data) =>{
// 			res.json(data);
// 		})
// 		.catch((error) =>{
// 			// return next(error);
// res.status(404).send('Error 404!')

// 		})
// 	);
studentSchema.findByIdAndUpdate({}).then(data => {
	res.json(data)
}).catch(err => {
	next(err)
})
});

// Delete Student
router.delete("/delete-student/:id",
(req, res, next) => {
// 	Student.findByIdAndRemove(
// 	req.params.id, (error, data) 
// 	.then((data) =>{
// 	res.status(200).json({
// 		msg: data,})
// 	})
// 	.catch((error) =>{
// 	// return next(error);
// res.status(404).send('Error 404!')

// })
// )
studentSchema.findByIdAndRemove({}).then(data => {
	res.json(data)
}).catch(err => {
	next(err)
})
});

module.exports = router;
