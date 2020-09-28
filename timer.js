var myfunc= delay =>
{
    console.log("hello world after "  + delay + " seconds");
};
setTimeout(myfunc, 5000, "five");
setTimeout(myfunc, 10000,"ten");
setTimeout(myfunc,15000,"fifteen"); 