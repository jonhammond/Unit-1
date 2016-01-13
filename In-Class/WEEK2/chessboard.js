// create a chessboard via user input

// Loop through the first time to determine the starting chracter

// Build up a row, and print it out

// The final result should be a perfect square with alternating "#" and " "

var length = 16;

function chessboard (chessBoardLength) {
  for ( var i = 1; i < (chessBoardLength + 1); i++ ) {
    var row = "";
    for ( var j = 1; j < (chessBoardLength + 1); j++) {
      if (!(i%2) && !(j%2)) {
        row += " ";
      };
      if ( !(i%2) && !!(j%2)) {
        row += " # ";
      };
      if ( !!(i%2) && !(j%2)) {
        row += " # "
      };
      if ( !!(i%2) && !!(j%2)) {
        row += " ";
      };
    };
    console.log(row);
  }; 
};

chessboard(22);