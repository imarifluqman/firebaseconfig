
// var userName = "Arif";
// function callName(params) {
//     if (isNaN(params)) {
//         let userName = prompt("What is your Nick name....?");
//         alert("Hey...!" + userName)
//     }
//     console.log(userName);
// }

// callName("luqman")




// let fname = prompt("first name?");
// let lname = prompt("last name?");

// let greeting = `Good Morning  ${fname} ${lname}`;
// // console.log(greeting);
// document.querySelector("#show").innerHTML = greeting;

// function userData({ name, rollNumber, subject, ...remaining }) {
//     let msg = `My name is ${name} my roll number is ${rollNumber} my subject is ${subject}`;
//     console.log(msg, remaining);
// }


// let propertyName = "lName";
// let instituteName = "SMIT";

// let user = {
//     name: "arif",
//     rollNumber: 2345,
//     subject: "javascript",
//     [propertyName]: "luqman",
//     instituteName
// }

// user[propertyName] = "Luqman";

// console.log(user);
// userData(user)
// let { name, rollNumber, subject } = user;


// let array = ["HTML", "CSS", "Javascript"];

// let [html, css, javascript] = array;


// console.log(css);


// let fruits1 = ["Apple", "Banana", "Graps"];
// let fruits2 = ["Mango", "Water Mellon", "Orange"];
// let allFrouits = [...fruits1, ...fruits2];

// console.log(allFrouits);


// function billHistory(cName, bnum, ...items) {
//     console.log(cName, bnum, items);
// }

// billHistory("Arif", 3477, "Daal", "Cheeni", "chawal", "oil");



// let product = (num1, num2) => num1 * num2;
// console.log(product(12, 10));

// let singal = num1 => num1;
// console.log(singal(12));


// let fName = ["Arif", "sabeer", "muzammil", "huzaifa", "abdullah"];
// let lName = ["khan", "qureshi", "shah", "khan", "ansari"];
// let fullnames = fName.map((fname) => {
//     let lNameIndex = Math.floor(Math.random() * 5);
//     return `${fname} ${lName[lNameIndex]}`;
// })


// console.log(fullnames);

// let khans = fullnames.filter((withkhan) => {
//     return withkhan.split(" ")[1] === "khan";
// })

// console.log(khans);


// ================= using reduce method =======================

// let numbers = [16, 1, 2, 11, 12, 3, 4, 5, 6, 7, 8, 9];
// let sum = numbers.reduce((result, num) => {
//     return result * num
// }, 3)
// console.log(sum);

// let largestNum = numbers.reduce((result, num) => {
//     if (result < num) {
//         result = num
//     }
//     return result;
// }, 0);

// console.log(largestNum);

// let pets = ["dog", "chicken", "cat", "dog", "chicken", "rabbit", "chicken", "cat"];

// let petsCount = pets.reduce((result, pet) => {
//     if (result[pet]) {
//         result[pet]++;
//     } else {
//         result[pet] = 1
//     }
//     return result;
// }, {})

// console.log(petsCount);


// ================= using Map method =======================
// let sumNum = 1;
// let summap = numbers.map((num) => {
//     return sumNum = sumNum * num;
// })
// console.log(sumNum);



// ================= using every method =======================


// let firstarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let secondarr = [4, 8, 3];

// function isSubset(arr1, arr2) {
//     return arr2.every(item => arr1.includes(item));

// }

// let isItsubset = isSubset(firstarr, secondarr);
// console.log(isItsubset);


// ================= Promise method =======================

// function checkIfeven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2000);
//     })
// }

// checkIfeven(7)
//     .then(() => {
//         console.log("Yes...! this is Even number")
//     })
//     .catch(() => {
//         console.log("This is not Even number")
//     });




// function checkIfeven() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let time = new Date();
//             let sec = time.getSeconds();
//             if (sec % 13 === 0) {
//                 reject({ error: 404, errormessage: "you wrote wrong email or password" });
//             } else if (sec % 2 === 0) {
//                 resolve("authorised");
//             } else {
//                 resolve("unauthorised");
//             }
//         }, 5);
//     })
// }

// checkIfeven()
//     .then((ff) => {
//         console.log(ff)
//     })
//     .catch((ee) => {
//         console.log(ee.errormessage)
//     });



// let users = [
//     { email: 'abc@gmail.com', password: "123456" },
//     { email: 'xyz@gmail.com', password: "ab1232" },
//     { email: 'def@gmail.com', password: "asdfasd" },
// ];
// function checkemail(id, p) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].email !== id && users[i].password === p) {
//                 reject({ error: 404, errormessage: "you wrote wrong email or password" });
//             } else if (users[i].email === id && users[i].password !== p) {
//                 reject({ error: 404, errormessage: "you wrote wrong email or password" });
//             } else if (users[i].email === id && users[i].password === p) {
//                 resolve("authorised");
//             }
//             //  else {
//             //     resolve("unauthorised");
//             // }
//         }
//     })
// }

// checkemail("def@gmail.com", "asdfasd")
//     .then((ff) => {
//         console.log(ff)
//     })
//     .catch((ee) => {
//         console.log(ee.errormessage)
//     });


// class Animal {
//     constructor(name, legsCount, color, food) {
//         this.name = name;
//         this.legsCount = legsCount;
//         this.color = color;
//     }
//     eat() {
//         console.log(`${this.name} eats ${this.food} ...!`);
//     }
// };


// class Rabit extends Animal {
//     constructor(name, legsCount, color, food, speed, quality) {
//         super(name, legsCount, color, food)
//         this.speed = speed;
//         this.quality = quality;
//     }
// }


// let obj = new Rabit("Rabit", 4, "white", "carrot", "fast", "hide it self inside mud");
// console.log(obj);
// obj.eat()

// let data = [];

// let showapi = document.querySelector("#showapi");

// async function callApi() {
//     await fetch("https://jsonplaceholder.typicode.com/photos/")
//         .then(res => res.json())
//         .then((json) => data = json);

//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//         showapi.innerHTML += `<a href="${data[i].url}" target="_blank">
//         <figure>
//             <img src="${data[i].thumbnailUrl}" alt="">
//             <figcaption> ${data[i].title}</figcaption>
//         </figure>
//         ${data[i].title}
// </a>`

// data.map((arr)=>{
//     showapi.innerHTML += `<a href="${arr.url}" target="_blank">
//     <figure>
//         <img src="${arr.thumbnailUrl}" alt="">
//         <figcaption> ${arr.title}</figcaption>
//     </figure>
//     ${arr.title}
// </a>`
// })




// ======================  FIREBASE  =============================
import { app } from "./firebaseConfig.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth(app);

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signupUser);

function signupUser() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user) => {
            console.log(`User registered successfully. Please verify your Email.`, user.user.uid);
            verifyEmail();
        })
        .catch((e) => {
            console.error(e, 'something went wrong.');
        })
}



// ========================== LOGIN =====================

let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");

let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", loginUser);

function loginUser() {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(`User login successfully.`, user.uid);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}


async function verifyEmail() {
    await sendEmailVerification(auth.currentUser)

}