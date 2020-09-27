const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }

    // get a single user by id

    // create a new user

    // update a user

    // delete a user
}