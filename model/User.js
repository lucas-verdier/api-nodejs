class User {
    constructor(email, password, firstname, lastname, createdAt, updatedAt, groupeId) {
        this.email =  email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.groupId = groupeId;
    }
}

module.exports = { User };