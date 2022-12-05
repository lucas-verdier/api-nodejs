const { MongoClient, Db } = require('mongodb');

let client = null;

function connection(url, callback) {
    if (client === null) {
        client = new MongoClient(url);

        client.connect((err) => {
            if(err) {
                client = null;
                callback(err);
            } else {
                callback();
            }
        })
    } else {
        callback();
    }
}

function db() {
    return new Db(client, 'api-nodejs');
}

function closeConnect() {
    if (client) {
        client.close();
        client = null;
    }
}

module.exports = { connection, db, closeConnect };