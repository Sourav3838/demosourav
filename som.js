//this function will take two numbered arrays as a parameter
const combine_array = (arr1, arr2) => {
    /*firstly i have concatenated arr1 and arr2 into demo array, then sorted the array,
   after sorting array i have used Set to keep all the elements unique in the array and by
   using spread operator i have passed the newly unique array which is the combination of all the el
   ements of arr1 and arr2 into arr3 array*/
    const demo = [];
    const arr3 = [...new Set(demo.concat(arr1, arr2).sort((a, b) => a - b))];
 //returning arr3
 return arr3;
};
//here are two arrays arr1 and arr2
const arr1 = [1, 2, 'som', 5, 1];
const arr2 = [10, 10, 2, 7, 6, 8];
//checking if arr1 array is purely numbered array or not
var res_arr1 = arr1.every(function (element) {
 return typeof element === 'number';
});
//checking if arr2 array is purely numbered array or not
var res_arr2 = arr2.every(function (element) {
    return typeof element === 'number';
});
/*if both the arrays are numbered then the function will be called and will be expected to return s
omething which will be dislayed on the console further*/
if (res_arr1 && res_arr2) console.log(combine_array(arr1, arr2));
//if any of the array is not numbered
else console.log('either of the array is not numbered');