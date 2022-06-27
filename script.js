// Array

var fullName = ["Vishnu", "Raja", "shanty"];
fullName.push('Ram');
// fullName.pop();
// fullName.pop();
// fullName.pop();
// fullName.pop();
// console.log(fullName);
// console.log(fullName[2]);

// !Map Function
fullName.map((name) => console.log(name));

fullName.map((name1) => {
    console.log(name1);
    console.log(name1);
    console.log(name1);
});

// !Object

var userDetails = {
    age: 30,
    name: 'Vishnu',
    married: false,
    friends: ['abcd', 'abc', 'abcdefg', 'abcdef'],
    "full name": 'Vishnu M',
    hobbies: {
        play: 'cricket',
        sing: 'song'
    }
}
console.log(userDetails)
console.log(userDetails["full name"]);
console.log(userDetails.name);