var row = "";

function poundPyramid (length) {
  for ( var i = 0; i < length; i++ ) {
    row += "#";
    console.log(row);
  };
  for ( var i = length ; i > 0; i --) {
    row.slice(0);
    console.log(row);
  };
};
    

poundPyramid(5);