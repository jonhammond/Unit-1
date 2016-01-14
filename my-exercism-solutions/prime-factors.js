function primeFactorFinder (number) {
    var factors = [];
    for (var i = 2; i <= number; i++) {
        while(number % i === 0 && number !== 1) {
            factors.push(i);
            number = number/i;
        }
    }
    return factors;
}

module.exports = {
    for : primeFactors
}
  



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
