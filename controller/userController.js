const { User } = require('../model/User');
const client = require('../database/connect');
const insertUser = async (req, res) => {
    try {
        let user = new User(
            req.body.email,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
            req.body.createdAt,
            req.body.updatedAt,
        );
        let result = await client.db().collection("users").insertOne(user);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllUsers = async(req, res) => {
    try {
        let cursor = client.db().collection("users").find();
        let result = await cursor.toArray();
        if(result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(204).json({msg: "Aucun utilisateur trouvé"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = { insertUser, getAllUsers };