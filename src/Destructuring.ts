// Object Destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Ahmed',
        lastName: 'Omar'
    },
    gender: 'male',
    favouriteColor: 'Black'
}

const { favouriteColor: myFavoriteColor,
    name: { firstName: myName }, } = user

console.log(myFavoriteColor, myName);


// Array Destructuring


const friends = ['Allen', 'Allison', 'Ahmed'];

const [, , myBestFriend ] = friends;

console.log(myBestFriend);