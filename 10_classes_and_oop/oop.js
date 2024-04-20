const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //even if you don't return, still it will work;
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) //if you don't write new keyword, userOne values will be overwritten
console.log(userOne.constructor);
// *** lear about instance of method from google 
//console.log(userTwo);