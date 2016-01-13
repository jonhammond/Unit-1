var globalVariable = "The global version";

function test() {
    var globalVariable = "The impostor";
    console.log(globalVariable);
}

test();
console.log(globalVariable);
