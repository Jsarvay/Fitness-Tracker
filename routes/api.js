const router = require("express").Router();
const { query } = require("express");
const Workout = require("../models/workout");
//set Api get route
router.get("/api/workout", (req,res) => {
    Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api get route for date range
router.get("/api/workout/range", (req,res) => {
    Workout.find({ day: {$gte: query.start, $lte: query.end } }).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api post route
router.post("/api/workout", (req,res) => {
    Workout.create({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api put route
router.put("/api/workout/:id", ({ body, params },res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } },
        {new: true, runValidators: true}
        ).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;