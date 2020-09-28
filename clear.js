var myfunc=()=>console.log("hey there");
var timeridd=setTimeout(myfunc,0);

console.log("hello");
clearTimeout(timeridd);