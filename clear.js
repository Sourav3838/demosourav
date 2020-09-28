var myfunc=()=>console.log("hey there");
var timerid=setTimeout(myfunc,0);

console.log("hello");
clearTimeout(timerid);