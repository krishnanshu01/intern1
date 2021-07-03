const express = require('express');
const { checkAuth, checkRole } = require('./basicAuth');

const app = express();

const {users, ROLE} = require('./data');





//middlewares

app.use(express.json());

app.use(setUser);



//routes

app.get('/' , (req , res) => {
    res.send('Home Page');
})

//dashBoard is for users
app.get('/dashBoard' ,checkAuth , (req , res) => {
    res.send('DashBoard Page');
})

//This is for admin page
app.get('/admin' ,checkAuth , checkRole(ROLE.ADMIN), (req , res) => {
    res.send('Admin Page')
})


function setUser(req , res , next){
    const userId = req.body.userId;
    if(userId){
        req.user = users.find(user => user.id === userId);;
    }
    next();
}

app.listen(3000);

