const ROLE = {
    ADMIN :'admin',
    USER : 'user'
}

module.exports = {
    ROLE : ROLE,
    users : [
        {id : 1 , name : 'adarsh' , role : ROLE.ADMIN},
        {id : 2 , name : 'Rahul' , role : ROLE.USER},
        {id : 3 , name : 'krish' , role : ROLE.USER},
    ]
}