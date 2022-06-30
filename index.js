// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

(function() {
    console.log('Yet more razzling');
})

// const fn = function () {
//     console.log("Yet more razzling");
//   };
// console.log(fn());


let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// console.log((function (baseNumber) {
//     return baseNumber + 3;
//   })(2));

// function outer(greeting, msg="It's a fine day to learn") {
//     const innerFunction = function(name, lang = "Python") {
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction("student", "JavaScript");
// }

// console.log(outer('Hi'));

// function outer(greeting, msg="It's a fine day to learn") {
//     const innerFunction = function(name, lang = "Python") {
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
// }

// console.log(outer("Hello")("student", "JavaScript"));

// const storedFunction = outer("Hello");
// console.log(storedFunction("student", "JavaScript"));


// const array = function (thingToAdd) {
//     const base = 3;
//     return [
//       function () {
//         return base + thingToAdd;
//       },
//       function () {
//         return base;
//       },
//     ];
//   }
//   let invokingArray = array(2)

//   console.log(invokingArray[1]());


function wrapAdjective(string) {
        const result = function (adjective = 'special') {
        return `You are ${string}${adjective}${string}!`;
    }
   return result;
}

console.log(wrapAdjective("!!!")())



