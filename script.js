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

// !combination of array and object

var studentsData = [{
    name: 'vishnu',
    age: 30
}, {
    name: 'ram',
    age: 30
}, {
    name: 'Raja',
    age: 30
},];

console.log(studentsData);
studentsData.map((data) => console.log(data));
studentsData.map((data) => console.log(data.name));


var data1 = {
    name: 'ram',
    class: '12th'
}
data1.age = 12;;
data1.name = 'vishnu';
data1.class = undefined;
console.log(data1);


// !string manipulation

var name12 = "aDiThyia"
console.log(name12.toUpperCase());
console.log(name12.toLocaleLowerCase());
console.log(name12.slice(0, 3));

var cote = "JavaScript is Amazing";
console.log(cote.replace("JavaScript", "JS"));
console.log(cote.includes('is'));
console.log(cote)


var number = 12345;
console.log(number);
console.log(number + 1);

var number1 = "12345";
console.log(number1);
console.log(number1 + 1);

var stringNumber = "12345"
var numbers = parseInt(stringNumber);
console.log(numbers + 1)

var string = "124wd65"
console.log(parseInt(string));

var string1 = "abcdef"
console.log(parseInt(string1));

console.log(string1[2]);

// !completed