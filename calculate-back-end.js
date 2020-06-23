/******************
 * YOUR CODE HERE *
 ******************/


function calculate(str1, str2, str3){
  let String1 = Number(str1); 
  let String2 = Number(str2); 


if (str3 === '+' || str3 === 'added to' || str3 === 'plus'){
  return String1 + String2;  
} else if (str3 === '-'){
  return String1 - String2;
} else if (str3 === 'x'){
  return str1 * str2;
} else if (str3 === '/'){
  return str1 / str2;
} else if (str3 === '%'){
  return str1 % str2;
} else if (str3 === 'minus'){
  return str1 - str2;
}else if (str3 === 'times'){
  return str1 * str2;
}else if (str3 === 'X'){
  return str1 * str2;
}else if (str3 === 'modulus'){
  return str1 % str2;
}else if (str3 === 'mod'){
  return str1 % str2;
// }else if (str3 === 'added to'){
//   return str1 + str2;
}else if (str3 === 'subtracted from'){
  return str1 - str2;
}else if (str3 === 'multiplied by'){
  return str1 * str2;
}else if (str3 === 'divided by'){
  return str1 / str2;
}else
  return "Sorry, that's not a mathematical operation!";
} 











/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;