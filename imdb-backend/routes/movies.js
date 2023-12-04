const express = require("express")

const router = express.Router();
const movies = require("../models/Movies")

router.get("/getAllMovies", async(req,res)=>{
    try{
        const movie_list = await movies.find();
        res.json(movie_list);
    }
    catch{
        console.error(error.message);
        res.status(500).send("You ran into an internal server error");
    }
})




router.post("/createAnEntry", async (req, res) => {
    try{
        //if a movie of the same title exists then don't create another movie with the same title
        let movie = await movies.findOne({movie_title: req.body.movie_title}); 
        if(movie){
            return res.status(400).json("Sorry this movie already exists...")
        }
        movie = movies.create({
            movie_type: req.body.movie_type,
            movie_title: req.body.movie_title,
            movie_starring: req.body.movie_starring,
            movie_director: req.body.movie_director
        })
        return res.json("Movie created Successfully!");
    }
    catch{
        console.error(error.message);
        res.status(500).send("You ran into an internal server error");
    }
})
router.put("/updateMovie/:id", async (req, res) => {
    try{
        //updating the movie based on the id specified
        const {movie_type,movie_title,movie_starring,movie_director} = req.body;
        const newMovie = {};
        if(movie_type) newMovie.type = movie_type;
        if(movie_title) newMovie.movie_title = movie_title;
        if(movie_starring) newMovie.movie_starring = movie_starring;
        if(movie_director) newMovie.movie_director = movie_director;

        let movie = await movies.findById(req.params.id);

        //if the movie does not exist return an error
        if(!movie){
            return res.status(404).send("Sorry! The movie does not exist...");
        }
        updateMovie = await movies.findByIdAndUpdate(req.params.id, {$set: newMovie}, {new: true})
        res.json({newMovie});
    }
    catch{
        console.error(error.message);
        res.status(500).send("You ran into an internal server error");
    }
})
router.delete("/deleteMovie/:id", async (req, res) => {
    try{
        //deleting the movie based on the id specified

        let movie = await movies.findById(req.params.id);

        //if the movie does not exist return an error
        if(!movie){
            return res.status(404).send("Sorry! The movie does not exist...");
        }
        deleteMovie = await movies.findByIdAndDelete(req.params.id)
        res.json({deleteMovie});
    }
    catch{
        console.error(error.message);
        res.status(500).send("You ran into an internal server error");
    }
})

module.exports = router