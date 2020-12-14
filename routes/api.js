const router = require("express").Router();
const { query } = require("express");
const Workout = require("../models/workout");
//set Api get route
router.get("/api/workouts", (req,res) => {
    Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api get route for date range
router.get("/api/workouts/range", (req,res) => {
    Workout.find({ day: {$gte: query.start, $lte: query.end } }).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api post route
router.post("/api/workouts", (req,res) => {
    Workout.create({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api put route
router.put("/api/workouts/:id", ({ body, params },res) => {
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