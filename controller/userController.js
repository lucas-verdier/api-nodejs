const { User } = require('../model/User');
const client = require('../database/connect');
const {ObjectId} = require("mongodb");
const insertUser = async (req, res) => {
    try {
        let user = new User(
            req.body.email,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
            req.body.createdAt,
            req.body.updatedAt,
            req.body.groupId,
        );
        let result = await client.db().collection("users").insertOne(user);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllUsers = async (req, res) => {
    try {
        let cursor = client.db().collection("users").find();
        let result = await cursor.toArray();
        result.length > 0 ? res.status(200).json(result) : res.status(204).json({msg: "Aucun utilisateur trouvé"});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getOneUserById = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let cursor = client.db().collection("users").find({_id : id});
        let result = await cursor.toArray();
        result.length > 0 ? res.status(200).json(result[0]) : res.status(204).json({msg: "Aucun utilisateur trouvé"});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let result = await client.db().collection("users").deleteOne({_id: id});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const login = async (req, res) => {
    try {
        let email = new ObjectId(req.params.email);
        let password = new ObjectId(req.params.password);
        let cursor = client.db().collection("users").find({email: email, password: password});
        let result = await cursor.toArray();
        if (result.length > 0) {
            res.status(200).json(result);
            console.log('Utilisateur connecté');
        } else {
            res.status(204).json({msg: "Aucun utilisateur trouvé"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = { insertUser, getAllUsers, getOneUserById, login, deleteUser };