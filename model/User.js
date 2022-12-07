class User {
    constructor(email, password, firstname, lastname, createdAt, updatedAt, groupId) {
        this.email =  email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.groupId = groupId;
    }
}

module.exports = { User };