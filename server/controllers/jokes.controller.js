const jokes = require("../models/jokes.model")


module.exports = {

    Greet: (req, res) => {
        res.json({ message: "Hello World" });
    },

    allJokes: (req, res) => {
        const user = createUser();
        res.json(user)
    }, 

    newCompany: (req, res) => {
        const company = createCompany();
        res.json(company)
    },
    newUserAndCompany: (req, res) => {
        const user = createUser();
        const company = createCompany();
        res.json({ user, company });
    },
    
    postUser: (req, res) => {
        res.json(req.body)
    }
};