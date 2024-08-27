const express = require('express');
const app = express();

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const userModel = require("./models/usermodel")


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")
app.set('view options', { root: './views/partials' });

const movies = require('./movie.json');

app.get("/", (req, res) => {    
    if(req.cookies.token){
        res.redirect("explore");
    } 
    else{
        res.render("index");
    }

})

app.get("/sign", (req, res) => {
    res.render("sign")
})


app.post("/craeteuser", async(req, res) => {
    let { name, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.send("user alredy existed");
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash) => {
            let craeteduser = await userModel.create({
                name: name,
                email: email,
                password: hash
            })
            let token = jwt.sign({ email }, "sitaram");
            res.cookie("token", token);
            res.redirect("/explore");
        })
    })
})


app.post("/loginuser", async(req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send("something went wrong.");
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (result) {
            let token = jwt.sign({ email: user.email }, "sitaram");
            res.cookie("token", token);
            res.redirect("/explore");
        } else return res.send("no you can't login ");
    })
})


app.get("/explore",isloggin, async(req, res) => {
    let user = req.user;
    res.render("explore", { movies , user });
})

app.get("/profile",isloggin,async(req,res)=>{
    let email = req.user.email;
    let user = await userModel.findOne({ email })
    let histroy= [];
    user.watched.forEach(e => {
        histroy.push([movies[e-1].Title,e]);
    });
    histroy.reverse();
    histroy=histroy.slice(0,5);
       
    res.render("profile",{ user, histroy  });
})


app.get("/movie/:mid",isloggin ,async(req, res) => {
    let user = req.user;
    const MID = parseInt(req.params.mid);
    let film = movies[MID - 1];
    if (film) {
        res.render("movie", { film, user });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
    let email = req.user.email;
    let user_ = await userModel.findOne({ email })
    user_.watched.push(MID);
    await user_.save();

})

app.get("/logout", function(req, res) {
    res.cookie("token", "");
    res.redirect("/");

})

app.get('/api/movies', (req, res) => {
    res.json(movies);
});
app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m._id === movieId);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});








app.post("/getper",isloggin ,async(req, res) => {
    let {name} = req.body;
    let user = req.user;
    let raw = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=b4e71095`);
    let film = await raw.json();
    res.render("movie",{ film , user})
    console.log(film);
    
})

app.listen(3000);

function isloggin(req, res, next) {
    if (req.cookies.token === "") res.send("something went wrong");
    else {
        let data=jwt.verify(req.cookies.token,"sitaram");
        req.user =data;
    }
    next();
}

