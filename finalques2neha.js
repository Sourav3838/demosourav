const fs = require('fs');
//to perform file opeartions we require 'fs' module
function generatePrime(req, res) {
 //res:- response
 //req:- request
 const url = req.url;
 const body = [];
 const primes = [];
 if (url === '/') {
/*at localhost:3000/ (i.e the main page) a form will appear with an input field(where
user will write a number and a submit button*/
 res.setHeader('content-type', 'text/html'); //to prevent printing plain text
 //data is sent in form of chunks
 res.write('<html>');
 res.write(
"<body><form action='/prime' method='POST'><input type='number' placeholder='enter a number ...' name='n' required/><br><button type='submit'>generate prime numbers</button></form></body>"
);
res.write('</html>');
 return res.end();
 //nothing will be considered after res.end() for this particular block
/*i have added "required" in input field so the user cannot click on the button without
entering anything into the input field, once user give a number and click the button,
action will be triggered and it will take us to the part
 having url as /prime */
 }
 if (url === '/prime' && req.method === 'POST') {
     /*if we are inside this block that means user has given the number as well as clicked
the button so we are directed to the parthaving url /prime but at the same time it is
also important to check the method, as the form was having method ="post" that means
in order to get into this block not only the url has to be '/prime' but also the
method has to be POST as well */
 req.on('data', (chunks) => {
    //pushed the chunks from the stream to body
    body.push(chunks);
    //console.log(body);
    /*suppose if user has given a number 23 then the above console will be of this
   pattern [ <Buffer 6e 3d 32 33> ]*/
    //depending upon the user input but the pattern will remain same
    });
    return req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    /*stored body on a temporary buffer and convert it onto string (it will be
   readable data now)*/
    //console.log(parsedBody);
    /*suppose if user has given a number '23' then the output of above console.log
   will be n=23*/
    //here n is the name assigned to the input field
    const prime = parsedBody.split('=')[1];
//console.log(prime);
 //after spliting at '=' prime will have a array of two i.e [ 'n', '23' ]
 /*in order to fetch the value given by the user i have allocated the index 1 of
parseBody array to prime constant*/
/*prime numbers calculated till the number given by user(which is currently stored
in prime)*/
var i, j, flag;
for (i = 1; i <= prime; i++) {
if (i == 1 || i == 0) continue;
flag = 1;
for (j = 2; j <= i / 2; ++j) {
if (i % j == 0) {
flag = 0;
break;
}
}
if (flag == 1) {
primes.push(i);
//pushed all the prime numbers in an array named primes
 //console.log(i);
}
}
/*allocated the primes array to a Global named newprimes,it can be accessed
Globally*/
global.newprimes = primes;
/* in order to redirect to /result which will do the further task i have to
change the status code to 302*/
/*The HTTP response status code 302 Found is a common way of performing URL
redirection.*/
res.statusCode = 302;
/*redirecting to the part where url is /result, since there is no information
regarding method , so by default it is GET*/
res.setHeader('Location', '/result');
return res.end();
//no queries will be taken after this for this particular block
});
}
if (url === '/result' && req.method === 'GET') {
/*this part will open/access the file, and will write the prime numbers that were
calculated earlier*/
const prime_array = newprimes;
/*accessing the global named newprimes and added it into prime_array constant*/
const path = 'primeNumbers.txt';
/*instead of writing the name of the file again and again i have given a name to it
,any changes in the file name will be reflected in the path constant which will be
reflected in the whole piece of code*/
return fs.access(path, (err) => {
       //accessing the file
 if (err) {
    /*if the file doesnot exist it will give an error also the status code will
   be changed to 401*/
    //401 Unauthorized.
    res.statusCode = 401;
    console.log('The file does not exist:-' + err);
    res.write('The file does not exist:-' + err);
    return res.end();
    } else {
    /*if the file exists then we will write whatever is stored in constant
   prime_array into the file (i.e primeNumbers.txt)*/
    fs.writeFile(path, prime_array, () => {
    console.log('here is the array = ' + prime_array);
    /*on the console the prime numbers will be displayed , that are added
   into the file (just for confirmation)*/
    res.write('Result Sent!');
    //'Result Sent!' is displayed on the webpage
    return res.end();
 });
 }
 });
 }
 res.end();
}
//exporting the module
module.exports = {
 //given a reference name to the function generatePrime
 listener: generatePrime,
};
