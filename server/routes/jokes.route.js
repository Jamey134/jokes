const jokesController = require("../controllers/jokes.controller")




module.exports = app => {


    app.get("/api", jokesController.Greet); // <--- Home page with message
    
    app.get("/api/jokes", jokesController.findAllJokes); // <--- Get all jokes
    
    app.get("/api/jokes/:id", jokesController.findOneJoke); // <--- Get one joke with matching id
    
    app.post("/api/jokes", jokesController.addOneJoke); // <--- Add a new joke in DB

    app.patch("/api/jokes/:id", jokesController.updateJoke); // <--- Partially updates an existing joke with a matching id

    app.delete("/api/jokes/:id", jokesController.deleteJoke); // <---- Removes a joke with matching id.

    // app.post("/api/users", jokesController.postUser) // <-- When using postman, click on body tab to make a POST request. Afterwards, click on x-www-form-urlencoded.
}