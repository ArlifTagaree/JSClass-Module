class Users {
    constructor({email,password,displayName,height,weight,gender,image}){
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.image = image;
    }
    get showEmail(){
        return this.email;
    }
    get showDisplay(){
        return this.displayName;
    }
    get showImage(){
        return this.image;
    }
    get showH(){
        return this.height;
    }
}

class userLogin extends Users {
    constructor({email, password, image},lnwza,word){     
        super({email, password,image,displayName : lnwza});
        this.word = word;
    }
    NongBoomNaruk(){
        console.log(`${this.word}`)
    }
}
const pramote = new userLogin({email:'test@gmail.com', password:'123456789', image:1},'nongboom','น้องบูมน่ารักมากๆ');
pramote.NongBoomNaruk();