function checkAuth(req , res , next){
    if(req.user == null){
       return res.send('You are not login');
    }
    next();
}

function checkRole(role){
    return (req , res , next) => {
        if(req.user.role !== role){
            return res.send('you are not allowed')
        }
        next();
    }
}



module.exports = {
    checkAuth,
    checkRole
}