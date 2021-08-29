/* _.times(4,function(){
    console.log("Major");
}) */

/* let underscore = _.noConflict();
underscore.times(4 , function(){
    console.log("Major");
}) */

function splat (fun){
    return function(array){
        return fun.apply(null , array);
    }
}
// 定一个流程 给个产品 输出

var addArray = splat(function(x,y){return x + y});


console.log(
    addArray(["1.","2"])
);

function unsplat(fun){
    return function(){
        // return fun.call(null , _.toArray(arguments));
        return fun.call(null , [...arguments])
    }
}

var joinEle = unsplat(function(array){return array.join(' ')});

console.log(
    joinEle(1,2),
    joinEle("-" , '$' , '/' ,'|')
);

function parseAge(age){
    if(!_.isString(age)) fail("Expecting a string");
    var a ; 
    note("Attempting to parse an age");
    a = parseInt(age , 10);
    if(_.isNaN(a)){
        warn(["Could not parse age:" ,age].join(' '));
        a = 0;
    }
    return a;
}
function fail(thing){
    throw new Error(thing);
}
function warn(thing){
    console.log(['WARNING:',thing].join(' '));
}
function note(thing){
    console.log(['NOTE:',thing].join(' '));
}
console.log(

);
var letters = ['a', 'b', 'c'];

letters[1];
//=> 'b'

function naiveNth(a, index) {
    return a[index];
}

function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
    if (!_.isNumber(index)) fail("Expected a number as the index");
    if (!isIndexed(a)) fail("Not supported on non-indexed type");
    if ((index < 0) || (index > a.length - 1))
        fail("Index value is out of bounds");

    return a[index];
}

function second(a) {
    return nth(a, 1);
}
