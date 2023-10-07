//code 
const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))


app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("pages/home")

});

app.get("/aboutme", (req, res) => {
    res.render("pages/about", {
        title: "About me",
        details: [
            "EJS is simple templating language",
        ],
    });
});


app.get("/project", (req, res) => {
    res.render("pages/project", {
        title: "Projects",
        details: [
            
        ],
    });
});

app.get("/service", (req, res) => {
    res.render("pages/service", {
        title: "My services",
        details: [
            "EJS is simple templating language",
        ],
    });
});

app.get("/contactme", (req, res) => {
    res.render("pages/contactme", {
        title: "Contact Information",
        details: [
            "EJS is simple templating language",
        ],
    });
});





app.listen(8000, () => { console.log("App is running") })
