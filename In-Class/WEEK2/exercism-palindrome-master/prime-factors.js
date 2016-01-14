// our code
function myFn (number) {
  var input = numbers;
  var factors = [];
  for (var i=0; i <= input; i++) {
    while (input === 0 && input !== 1) {
        factors.push(i);
        input = input/i;
      };
    };
  };
  return factors;
};

module.exports = {
  for: myFn
};
  



//   while (i < number) {
//     if (number % i === 0) {
//       factors.push(i);
//     }
//     // else if (number === 0) {
//     //   factors.push(i);
//     // }
//     else {
//       factors.push(number);
//     };
//     i++;
//   };
//   return factors;
// };

  // for (var i = 2; i <= arg; i++) {
  //   if (arg % i === 0) {
  //     factors.push(i);
  //   }
    // else {
    //   return [];
    // }
//   };
//   return factors;
// };
