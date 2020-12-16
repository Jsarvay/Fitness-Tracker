const router = require("express").Router();
const { query } = require("express");
const db = require("../models");

//set Api get route
router.get("/api/workouts", (req,res) => {
    db.Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api get route for date range
router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api post route
router.post("/api/workouts", (req,res) => {
    console.log("hit the post");
    db.Workout.create({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

//set Api put route
router.put("/api/workouts/:id", ({ body, params },res) => {
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } },
        {new: true, runValidators: true}
        ).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;