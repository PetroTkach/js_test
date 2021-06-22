'use strict'

// var x;
// console.log('значення x:', x);

// let a = 0
// console.log('значення a:', a)
// const b = '1'
// console.log('значення b:', b)

// console.log('тип даних a:', typeof a)
// console.log('тип даних b:', typeof b)

// let stringValue = ''
// console.log

// let answer = confirm('do you speak js')
// console.log('Hello', answer)

// let value = prompt('enter')
// console.log(value)

// Change code below this line


function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  switch(password) {case null:
      message = "Canceled by user!";
      break;
     case ADMIN_PASSWORD :
      message = "Welcome!";
    break;
     default:
  message = "Access denied, wrong password!";
    }
  
    // Change code above this line
    return message;
  }
  
  

