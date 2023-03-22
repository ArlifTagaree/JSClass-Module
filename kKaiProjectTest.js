class User{
    constructor(username,email,gender,age,password){
        this._username = username;
        this._email = email;
        this._gender = gender;
        this._age = age;
        this._password = password;
    }

    get username(){ return this._username; };
    get email(){ return this._email; };
    get gender(){ return this._gender; };
    get age(){ return this._age; };

    showInfo(){
        return `User: ${this._username}, ${this._email}, ${this._gender}`;
    }

    login(password){
        if (this._password === password){
            return 'Login Success';
        }else{
            return 'Login Failure';
        }
    }

    createActivityCard(name,duration,date){
        return `Activity: ${name}, Duration: ${duration} hrs, Created: ${date}`;
    }
}

class Admin extends User{
    delete(user){
        return `${user.username} was deleted!`;
    }

    showInfo(){
        return `Admin: ${this._username}, ${this._email}, ${this._gender}`;
    }
}

//Create Users
const user1 = new User('Joe','joe@email.com','male',49,'1234');
const user2 = new User('Billy','billy@live.com','male',23,'4321');
const user3 = new Admin('Samanta','samanta@123.com','female',32,'xxxy');

console.log(user1.showInfo());
console.log(user2.showInfo());
console.log(user3.showInfo());

console.log(user1.login('1234'));
console.log(user2.login('11'));

console.log(user1.createActivityCard('Bicycling',4.5,Date()));

console.log(user3.delete(user2));