const jokes = require("../models/jokes.model")


module.exports = {

    Greet: (req, res) => {
        res.json({ message: "Hello World" });
    },

    //READ ALL
    findAllJokes: (req, res) => {
        jokes.find()
            .then((allJokes) => {
                res.json({ jokes: allJokes })
            })
            .catch((err) => {
                res.json(err)
            });
    },

    //READ ONE DATUM (Joke) BY ID
    findOneJoke: (req, res) => {
        jokes.findOne({ _id: req.params.id })
            .then(oneJoke => {
                res.json({ joke: oneJoke })
            })
            .catch((err) => [
                res.json(err)
            ]);
    },


    //CREATE A JOKE
    createJoke: (req, res) => {
        jokes.create(req.body)
            .then(createdJoke => {
                res.json(createdJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },

    //UPDATE A JOKE BY FINDING IT'S ID
    updateJoke: (req, res) => {
        jokes.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => {
                res.json({ joke: updatedJoke })
            })
            .catch((err) => {
                res.json(err)
            });
    },

    //DELETE A JOKE 
    deleteJoke: (req, res) => {
        jokes.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json(err)
            });
    }
};