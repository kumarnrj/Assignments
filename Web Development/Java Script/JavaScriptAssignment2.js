/**
 * 1. Make a function called composedValue that takes two functions f1 and f2 and a value and returns
f1(f2(value)), i.e., the first function called on the result of the second function called on the value.
function square(x) { return(x*x); }
function double(x) { return(x*2); }
composedValue(square, double, 5); --> 100 // I.e., square(double(5))
 */

 /*
function square(num){
    return num*num;
}

function double(num){
    return  num*2;
  }

 function composedValue(square,double,num){
     return square(double(num));
 }


console.log(composedValue(square,double,6));

*/
/**
2. Make a function called compose that takes two functions f1 and f2 and returns a new function that,
when called on a value, will return f1(f2(value)). Assume that f1 and f2 each take exactly one argument.
var f1 = compose(square, double);
f1(5); --> 100
f1(10); --> 400
var f2 = compose(double, square);
f2(5); --> 50
f2(10); --> 200
 */

 /*
function square1(num){
    return num*num;
}

function double1(num){
    return  num*2;
  }


 function compose(square1,double1){
     return function f1(num){
         return square1(double(num));
     }
 }
 var f1 = compose(square1,double1);
 console.log(f1(5));
 console.log(f1(10))
*/

 /**
  3. Make a function called “find” that takes an array and a test function, and returns the first element of
the array that “passes” (returns non-false for) the test. Don’t use map, filter, or reduce.
function isEven(num) { return(num%2 == 0); }
isEven(3) --> false
isEven(4) --> true
find([1, 3, 5, 4, 2], isEven); --> 4
  */

  /*
function isEven(num){
    return num%2==0;
}

function find(list,fun){
        for(i=0;i<list.length;i++){
            
            if(fun(list[i])){
                return list[i];
            }
        }
  }

  var res =find([1, 3, 5, 4, 2], isEven);
  console.log(res);
*/

  /**
4. Recent JavaScript versions added the “map” method of arrays, as we saw in the notes and used in
the previous set of exercises. But, in earlier JavaScript versions, you had to write it yourself. Make
a function called “map” that takes an array and a function, and returns a new array that is the result
of calling the function on each element of the input array. Don’t use map, filter, or reduce.
map([1, 2, 3, 4, 5], square); --> [1, 4, 9, 16, 25]
map([1, 4, 9, 16, 25], Math.sqrt); --> [1, 2, 3, 4, 5]
   */

   /*
function doubleNum(num){
    return num*2;
}

function map(list,fun){
   newlist=[];
   list.forEach(function(i){
       newlist.push(fun(i));
   })
   return newlist;
}

var resList = map([1, 2, 3, 4, 5], doubleNum);
console.log(resList);



*/


/**
 *                                Functional Programming:
                                  Advanced Exercises      
 */

 /**
  * 1. Make a “pure” recursive version of find. That is, don’t use any explicit loops (e.g. for loops or the
forEach method), and don’t use any local variables (e.g., var x = ...) inside the functions. Hint:
remember the slice method of arrays.
  */


 function isEvenRec(num){
    return num%2==0;
}

function findRec(list,fun){
            if(fun(list.slice(0,1))){
                return list.slice(0,1);
            }
            else{
                list= list.slice(1,(list.length));
                //console.log(list)
                return findRec(list,fun);
            }
  }
  var res =findRec([1, 3, 5, 4, 2], isEvenRec);
  console.log(res);

  /**
2. Make a “pure” recursive version of map. Hint: remember the slice and concat methods of arrays.
map([1, 2, 3, 4, 5], square); --> [1, 4, 9, 16, 25]
map([1, 4, 9, 16, 25], Math.sqrt); --> [1, 2, 3, 4, 5]
   */


  function doubleNum(num){
    return num*2;
}

var resList=[]
function map(list,fun){
    if(list.length==0){
        return;
    }
  resList.push(fun(list.slice(0,1)))
  
  list= list.slice(1,(list.length));
   return map(list,fun);
}

map([1, 2, 3, 4, 5], doubleNum);
console.log(resList);


/**
 * 3. JavaScript lets you define anonymous functions and call them right on the spot. For example,
(function(x) { return x*x; })(5) returns 25. Also, if you concatenate a string with a function, the
result is a string that looks more or less like the function definition. For example:
function square(x) { return x*x; }
"square is " + square
--> "square is function square(x) { return x * x; }"
Use these ideas to make an anonymous function call that outputs a string, where inside that string is
exactly what was typed in as the function call. I.e., you go to the Firebug console and type in
(function(...) {something})(blah)
and get back
"(function(...) {something})(blah)"
 */


var myFunction = function (a, b) {return a * b};
console.log(""+myFunction);

