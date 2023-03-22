class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._isImage = false;
        this._isOnline = false;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    addImage() {
        this._isImage = true;
    }

    delImage() {
        this._isImage = false;
    }

    login() {
        this._isOnline = true;
    }

    logout() {
        this._isOnline = false;
    }

    resetPass(newPass) {
        this._password = newPass;
    }

}

class AdminUser extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this._isAdmin = true;
        this._isAllPermission = true;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    get isAllPermission() {
        return this._isAllPermission;
    }
}

const user1 = new User('Mee-pooh', 'tlimpawittayakul@gmail.com', '12345678');
const admin1 = new AdminUser('admin1', 'admin1@gaintrack.com', 'admin111');

console.log(user1);
console.log(admin1);


user1.login();
user1.resetPass(11111111);
user1.addImage();
console.log(user1);