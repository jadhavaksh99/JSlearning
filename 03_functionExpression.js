var show = function(){
    console.log(`Inside function Expression...`);
}
show();

var add = function(value1, value2){
    console.log(value1 + value2);
}
add(10, 20);

var square = function(value){
    return value * value;
}
var result = square(10);
console.log(`square is ${result}`);