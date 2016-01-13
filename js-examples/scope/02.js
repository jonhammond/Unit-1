var globalVariable = "The global version";

function test() {
    globalVariable = "The impostor";
    console.log(globalVariable);
}

test();
console.log(globalVariable);
