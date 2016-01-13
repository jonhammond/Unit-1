var row = "";
var row2 = "#####";

function poundPyramid (length) {
  for ( var i = 0; i < length; i++ ) {
    row += "#";
    console.log(row);
  };
  for ( var i = length ; i > 0; i --) {
    row2.slice(0);
    console.log(row2);
  };
};    

poundPyramid(5);