const { Group } = require('../model/Group');
const client = require('../database/connect');

const insertGroup = async (req, res) => {
    try {
        let group = new Group(
            req.body.name,
            req.body.createdAt,
            req.body.updatedAt,
        );
        let result = await client.db().collection("groups").insertOne(group);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getAllGroups = async (req, res) => {
    try {
        let cursor = client.db().collection("groups").find();
        let result = await cursor.toArray();
        result.length > 0 ? res.status(200).json(result) : res.status(204).json({msg: "Aucun groupe trouvé"});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = { insertGroup, getAllGroups };