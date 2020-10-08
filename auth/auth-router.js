const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const createToken = require('../utils/createToken');

router.post('/register', (req, res) => {
    let user = req.body;
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
    
    Users.add(user)
    .then(newUser => {
       Users.findBy(user.email).first()
       .then(foundUser => {
           res.status(201).json({message: 'User has been created', token: createToken(foundUser)})
       })
       .catch(err => res.status(500).json({error: 'Could not find the newly created user in the DB'}))
    })
    .catch(err => res.status(500).json('Could not register the user'))
})

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    Users.findBy(email).first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password))
        {
            const token = createToken(user);
            res.status(200).json({token});
        }
        else {
            res.status(400).json({error: 'username or password is invalid'});
        }
    })
    .catch(err => res.status(500).json(err))
})
module.exports = router;