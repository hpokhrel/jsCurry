//  //  old not ES6 method


// function autoEmailSend (to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending email to ${to} with a subject of ${subject} : ${body}`)
//         }
//     }
// }

// let step1 = autoEmailSend("pokhrelhari1@gmail.com")
// let step2 = step1("Order Confirmation")
// step2("This is for the confirmation of the order")


// new ES6 method

const sendAutoEmail = (to) => (subject) => (body) => 
    (`sending email to ${to} with a subject of ${subject} : ${body}`)


let step1 = sendAutoEmail("pokhrelhari1@gmail.com");
let step2 = step1("order confirmation");
console.log(step2('this is for the confirmation email'))