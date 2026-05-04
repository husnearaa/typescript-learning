// object destructuring
// array destructuring




// object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Hosneara",
    middleName: "Parvin",
    lastName: "Popy",
  },
  gender: "female",
  favouriteColor: "white",
};

//const myFavouriteColor = user.favouriteColor
//const myMiddleName = user.name.middleName


// here getting only favourite color from user object 
const { favouriteColor: myFavouriteColor } = user;
console.log(myFavouriteColor)


// here getting middle name from user object and renaming it to myMiddleName
const {
   favouriteColor,
   name: { middleName: myMiddleName },
 } = user;

 //console.log(myMiddleName);


 


 // array destructuring

 const friends = ["karima", "Rahima", "Mahia"];
 const [, , myBestFriend] = friends;
 console.log(myBestFriend);