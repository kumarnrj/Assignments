

/**
 Question 1. Make a function that returns “even” or “odd” depending on the number passed to it.
    parity(1); --> "odd"
    parity(2); --> "even"
 */

function parity(num){
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }

}
console.log(parity(1));
console.log(parity(2));

/**
Question 2. The notes showed a simple version of max that took exactly two arguments. 
Update this to take exactly three arguments. Note that the builtin version of Math.max 
takes any number of arguments,which is much better, but we don’t know how to do variable 
arguments yet. And, of course, no
using Math.max on this exercise.
max(1, 2, 3); --> 3
max(1, 3, 2); --> 3
max(3, 2, 1); --> 3
*/

function max(num1,num2,num3){
   //method one ->

   /*let mx = Math.max(num1,num2);
   return Math.max(mx,num3);
    */

   // method two ->

   let mxm = num1>num2?(num1>num3?num1:num3):(num2>num3?num2:num3);
   return mxm;
}
console.log(max(1, 2, 3)); 
console.log(max(1, 3, 2)); 
console.log(max(3, 2, 1)); 

/**
Question 3. Copy the flipCoin function from the last set of exercises. Now, make a function that, 
given a number,
flips a coin that many times and returns the number of heads.
numHeads(10); --> 4
numHeads(10); --> 6
numHeads(10); --> 6
*/



/**
Question 4. Make a function that takes a number of flips and returns the fraction that were heads.
headsRatio(10); --> 0.7
headsRatio(10); --> 0.4
headsRatio(10000); --> 0.5023
headsRatio(10000000); --> 0.4999948
 */

/**

Question 5. Make a function that takes a number and a short string, and returns the string 
concatenated that
number of times.
padChars(5, "x"); --> "xxxxx"
padChars(7, "-"); --> "-------"
*/

function padChars(num,str){
   newStr=""
   for(var i=0;i<num;i++){
       newStr+=str;
   }
   return newStr;
}

console.log(padChars(5,'x'));
console.log(padChars(7, "-"));

/**
Question 6. Write a function that returns the number of times you have to roll a die to get a 6.
(Minor hint: compare Math.random() to 5/6).
numRollsToGetSix(); --> 13
numRollsToGetSix(); --> 2
*/

function numRollsToGetSix(){
   let ans=0;
   let i=0;
   while(ans!=6){
       ans =Math.floor(Math.random()*6)+1;
       i++;
   }
   return i;
}
console.log(numRollsToGetSix());

/**
Question 7. Update the HTML page so that each time you reload it, you randomly see either a “Have a GOOD
day!” or “Have a BAD day!” message. If you know some CSS already, make the font big.
 */


get_random = function (list) {
   return list[Math.floor((Math.random()*list.length))];
 } 
 
var list=["Have a GOOD day!","Have a BAD day!",];
 
document.getElementById("hello").innerHTML = get_random(list);
console.log(get_random(list));


                      /** Exercises: Basic JS */


/**
Question 8.   1. Create an array containing four random numbers. Use one-step array allocation. Print out the array
by evaluating the array variable in Firebug.
var fourNums = ...;
fourNums; --> [0.871570877817405, 0.9107447521970577,
0.743357509580703, 0.6571292972456975]
*/
var fourNums = [0.871570877817405, 0.9107447521970577,0.743357509580703, 0.6571292972456975];

/**
Question 9. Create an array containing 100 random numbers. Use two-step array allocation. Print out the array.
*/

var hundredNums=[]
for(let i=0;i<100;i++){
   hundredNums.push(Math.random());
}
console.log(hundredNums);

/**
10. Make a function that given an array of strings, where each string represents a number, returns an
array of the corresponding numbers.
*/

function numberArray(strings){
   var list=[]
   for(var i in strings){
      
       list.push(parseFloat(strings[i]));
   }

   return list;
}
var strings = ["1.2", "2.3", "3.4"];
var nums = numberArray(strings);
console.log(nums);

/**
11. Write a function that, given a string, will return the longest token (consecutive string of characters)
that contains neither an a nor a b.
longestToken("ababcdababefgababhiab"); --> "efg"
longestToken("aba"); --> ""
*/

function longestToken(token){
     let res="";
     let list=[];
     let mx =0;
     let j=0;
     let ans="";
     for(let i=0;i<token.length;i++){
         
         if(token[i]!=="a" && token[i]!=="b"){
             j=i;
             while(token[j]!=="a" && token[j]!=="b"){
                 res+=token[j];
                 j++;
             }
             list.push(res);
             res="";
         }  
     }
     for(let i=0;i<list.length;i++){
         if(mx<list[i].length){
             mx=list[i].length;
             ans=list[i];
         }
     }
    
   return ans;
}
var ans =longestToken("ababcdababefgababhiab"); 
console.log(ans);
var ans1 =longestToken("aba");
if(ans1==""){
console.log(`""`);
}

/**
12. Write a function that, given an array of strings, will compute the sum of the lengths of the words
that do not contain a “q”. Do not use a loop or the forEach method, only array methods (filter, map,
reduce) and string methods/properties (indexOf, length).
var test1 = ["stop", "quit", "exit"];
lengthOfNonQWords(test1); --> 8
var test2 = ["queen", "quit"];
lengthOfNonQWords(test2); --> 0
*/
function lengthOfNonQWords(list){
  const li= list.filter(list=>!list.includes("q")).reduce(function (res, str){
   return res+str.length;
   },0);
   //console.log(li);
   return li;
}
var test1 = ["stop", "quit", "exit"];
console.log(lengthOfNonQWords(test1));
var test2 = ["queen", "quit"];
var res=lengthOfNonQWords(test2);
console.log(res);


/**
13. Write a program that asks the user for a number n and prints the sum of
the numbers 1 to n
*/
const n = document.forms['form'];
console.log(n)

n.addEventListener('submit',function(e){
   e.preventDefault();
   const value = n.querySelector('input[type="text"]').value;
   var sum=0;
   for(i=0;i<=value;i++){
      sum+=i;
   }
   const p = document.createElement('p');
   p.textContent = "he sum of the number is : "+sum;
   n.appendChild(p);


});



/**
14. 2) Write a program that asks the user for their name and greets them with
their name.
*/

const userName = document.forms['form1'];


userName.addEventListener('submit',function(e){
   e.preventDefault();
   let value = userName.querySelector('input[type="text"]').value;
   
   const p = document.createElement('h2');
   p.textContent = "Welcome : "+value;
   n.appendChild(p);


});

/**
15. 3) Modify the previous program such that only the users Alice and Bob are
greeted with their names.
*/
/*
const userName1 = document.forms['form1'];


userName.addEventListener('submit',function(e){
   e.preventDefault();
   let value = userName1.querySelector('input[type="text"]').value;
   if(value==='Alice' || value==='Bob'){
   const p = document.createElement('h2');
   p.textContent = "Welcome : "+value;
   n.appendChild(p);
   }
   else{
       console.log("invlid name")
   }

});
*/

/**
16. Write a guessing game where the user has to guess a secret number. After
every guess the program tells the user whether their number was too large
or too small. At the end the number of tries needed should be printed. It
counts only as one try if they input the same number multiple times
consecutively.
*/
function guess(num){

}


const userName1 = document.forms['form1'];

var attempt=0
userName.addEventListener('submit',function(e){
   e.preventDefault();
   let value = userName1.querySelector('input[type="text"]').value;
   let num =value.toString().length;
   
   const p = document.createElement('h2');
   if(num>=3){
       attempt++;
       p.textContent = "number is too long";
       n.appendChild(p);
   }
   else if(num<1){
       attempt++;
       p.textContent = "number is too small";
       n.appendChild(p);
   }
   else if(value==15){
       attempt++;
       p.textContent = "Hurry you guess right and total attempt "+attempt;
       n.appendChild(p);
   }
   else{
       attempt++;
       p.textContent = "Wrong guess";
        n.appendChild(p);
   }

});

/**
* 17) Write a program that prints the next 20 leap years.
*/
function isLeapYear(year){
   if(year%400==0)
     return true;
   else if(year%100==0)
     return  false;
   else if(year%4==0)
     return true;
   else 
     return false;
}

function next20Leap(year){
    let count=0;
    while(true){
        if(isLeapYear(year)){
           count++;
            console.log("Leap year: ",count,year)
           
            if(count==20)
              break;
        }
        year++;
    }
}
next20Leap(2021);

/**
 * 18) Write a function that returns the elements on odd positions in a list.
 */

 // positon is taken as 0 based index;

 function OddPosition(list){
     for(let i=0;i<list.length;i++){
          if((i)%2!=0){
              console.log("The element at of positon: ",list[i])
          }
     }
 }

 OddPosition([1,2,3,4,5,6])

 /**
  * 19 Write a function that computes the running total of a list.
  */
  
  function runningTotal(list){
      let newList=[]
      let sum=0;
      list.forEach((item)=>newList.push(sum+=item))
      return newList;

  }

var runlist=[2, 4,6, 8, 10, 12];
console.log("Original list :",runlist);
runlist=runningTotal(runlist);
console.log("Running total List of Original List: ",runlist)

/**
20. Write a function on_all that applies a function to every element of a list. Use
it to print the first twenty perfect squares. The perfect squares can be found
by multiplying each natural number with itself. The first few perfect squares
are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect
square because there is no natural number m so that m*m=12. (This
question is tricky if your programming language makes it difficult to pass
functions as arguments.)

*/

function isPefect(num){
   let ind = 1;
  while(ind * ind <= num){
     if(ind * ind !== num){
        ind++;
        continue;
     };
     return true;
  };
  return false;
}

function perfectSquare(num){
    for(let i=1;i<=num;i++){
        if(isPefect(i)){
            console.log(i);
        }
    }
}

perfectSquare(20);

/**
21.  Write a function that combines two lists by alternatingly taking elements,
 */

function alternateConcat(list1,list2){
   let length= list1.length+list2.length;
   newList=[]
   let j=0;
   let k=0;
   for(let i=0;i<length;i++){
       if(i%2==0){
           newList[i]=list1[j++];
       }
       else{
           newList[i]=list2[k++];
       }
   }
   return newList;
}

let a = [5,10,15];
let b = ['A', 'B', 'C'];

console.log(alternateConcat(a,b));


/**
22. Write a function that merges two sorted lists into a new sorted list.
them followed by a sort.
*/

function MergeTwoList(list1,list2){
    
   newList=list1.concat(list2);
   newList.sort();
   console.log(newList);
}

let list1 = [1,4,6];
let list2 = [2,3,5];
MergeTwoList(list1,list2)
/**
* 23. Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a
copy of the list. How many swap or move operations do you need?

* 
*/


function leftRotate( arr, k, n)
   {
       for (let i = 0; i < k; i++)
           leftRotatebyOne(arr, n);
   }

  function leftRotatebyOne( arr, n)
   {
       let i, temp;
       temp = arr[0];
       for (i = 0; i < n - 1; i++)
           arr[i] = arr[i + 1];
       arr[n-1] = temp;
   }

arr =[1,2,3,4,5,6];
k=2;
leftRotate(arr,k,arr.length);
console.log(arr);


/**
*24.  Write a function that takes a number and returns a list of its digits. So for
2342 it should return [2,3,4,2].
*/

function digitlist(num){
    let digitList=[];
    let n=num;
    while(n>0){
        rem = n%10;
        digitList.unshift(rem)
        n =Math.floor(n/10);

    }
    return digitList;
}
console.log(digitlist(4567));

/**
* 25. Write functions that add, subtract, and multiply two numbers in their digitimplement
Karatsuba multiplication. Try different bases. What is the best
number exercise above due to the lack of large numbers in your language,
you can now use your own library for this task.
*/

function arithmaticOperation(num1,num2){
   let digitListNum1 = digitlist(num1);
   let digitListNum2 = digitlist(num2);
   
   let newAddList=[];
   let newMulList=[];
   let newSubList=[];

   
   for(let i=0;i<digitListNum1.length;i++){
       newAddList.push(digitListNum1[i]+digitListNum2[i]);
       newSubList.push(digitListNum1[i]-digitListNum2[i]);
       newMulList.push(digitListNum1[i]*digitListNum2[i]);
   }
console.log("Addition : ",newAddList);
console.log("multiplication: ",newMulList);
console.log("subtraction: ",newSubList);
}

console.log("Numbers are: ",13,21);
arithmaticOperation(13,21);


/**
 * 26. 
 * Assignment 1:
Create a simple page that lets users type in some temperature value in the Fahrenheit scale and
example, if the user types
Functionality
At the least, your program should allow for the following
User Input: One text field where the user will type in the temperature in Fahrenheit
n is clicked, your program should check to see if
the user has left the text field empty and also if what the user typed is a number and not anything
else.
If there are problems (as in II. above) then your program should show appropriate error
messages
Display results: If there are no errors and user input is valid, then your program should show the
results to the user.
 */

var temp = document.forms['form'];
 
function isNumeric(value) {
   return /^-?\d+$/.test(value);
}

temp.addEventListener('submit',function(e){
    e.preventDefault();
    
    let FahrenheitTemp = temp.querySelector('input[type="text"]').value;
    console.log(FahrenheitTemp);
    if(FahrenheitTemp==""){
       let p = document.createElement('p');
       p.style.color='red';
       p.textContent = "Please Enter a value";
       temp.appendChild(p);
    }
    else if(isNumeric(FahrenheitTemp)){
            let calcius = (FahrenheitTemp-32)*(5/9);
            let p = document.createElement('p');
           
            p.textContent = calcius+" degree calcius";
            temp.appendChild(p);
    }
    else{
       let p = document.createElement('p');
       p.style.color='red';
       p.textContent = "Please Enter a valid value";
       temp.appendChild(p);
    }

})


/**
 * 27
 * 
 * Write a script which uses a prompt box to get an input. Validate that the input is an Integer
between 1 and 30, and then print to the page asterisks (*) to represent the number. Your script
must run until you have collected 3 valid inputs as well as generate 3 outputs (one output on one
line).
Example:
Input: 4
Input: 6
Input: 12
****
******
************
 */



function isNumeric(value) {
    return /^-?\d+$/.test(value);
 }
function myFunction() {
    
    for(let i=0;i<3;i++){
          var txt="";
       
        var num = prompt("Please enter a number:", "");
        if (num == null || num == "") {
        txt = "User cancelled the prompt.";
         } 
        else if(isNumeric(num)){
            if(num>=1 && num<=30){
                for(let i=0;i<num;i++){
                   txt+="*";
                 }
             }
        }
        else {
           txt="invalid number";
      }
      document.getElementById("demo").innerHTML += txt+"</br>";
   }

}  


/**
 * 28
 * Assignment 3:
Create an HTML page that will Prompt the user:
It should take input for the number of rows and the number of columns
Then it should create a table (HTML table) with the given number of row and columns
Each cell of the table should contain the cell id (row#, col#)
 */
function createTable()
{
rowNo = window.prompt("Enter the number of rows", 1);
columnNo = window.prompt("Enter the number of columns",1);
  
 for(let i=0;i<parseInt(rowNo,10);i++)
  {
   var x=document.getElementById('customTable').insertRow(i);
   for(let j=0;j<parseInt(columnNo,10);j++)  
    {
     var y=  x.insertCell(j);
     y.innerHTML="Row-"+i+" Col-"+j; 
    }
   }
}


/**
 * 29. Write a program that takes the duration of a year (in fractional days) for an imaginary
planet as an input and produces a leap-year rule that minimizes the difference to the
to the planet’s solar year.
 */

function  leapYearRule(numberOfdays,num,den){
    return Math.round((1*den/num));
}
console.log(leapYearRule(365,101,400))

/**
 *30. Implement a data structure for graphs that allows modification (insertion, deletion). It
should be possible to store values at edges and nodes. It might be easiest to use a
dictionary of (node, edgelist) to do this.
 */

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge(source, destination) {
      if (!this.adjacencyList[source]) {
        this.addVertex(source);
      }
      if (!this.adjacencyList[destination]) {
        this.addVertex(destination);
      }
      this.adjacencyList[source].push(destination);
      this.adjacencyList[destination].push(source);
    }
    removeEdge(source, destination) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }  
  }

var g =new  Graph();
g.addVertex(10)
g.addEdge(10,30);


/**
 *31 Write a program that automatically converts English text to Morse code and vice versa.
 */

function englishToMorse(code, englishLang, letter)
{
    let txt="";
    console.log("Morse code of " + englishLang + " is "); 
        for (let i = 0; i < englishLang.length; i++) { 
            for (let j = 0; j < letter.length; j++) { 
                if (englishLang[i] == letter[j]) { 
                   txt+=code[j] + " "; 
                    break; 
                } 
            } 
        } 
        console.log(txt)
}

function morseToEnglish(code, morseCode){
    let txt=""
    array = morseCode.split(" "); 
       console.log("Morse code " + morseCode + " to English is "); 
         
        for (let i = 0; i < array.length; i++) { 
            for (let j = 0; j < code.length; j++) { 
                if (array[i].localeCompare(code[j]) == 0) { 
                   txt+= String.fromCharCode(j+ 97) + " "; 
                    break; 
                } 
            } 
        } 
        console.log(txt);
}

letter =[ 'a', 'b', 'c', 'd', 'e', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 
's', 't', 'u', 'v', 'w', 'x', 
'y', 'z', '1', '2', '3', '4', 
'5', '6', '7', '8', '9', '0' ]; 

code = [ ".-",   "-...", "-.-.", "-..",  ".", 
                "..-.", "--.",  "....", "..",   ".---", 
                "-.-",  ".-..", "--",   "-.",   "---", 
                ".--.", "--.-", ".-.",  "...",  "-", 
                "..-",  "...-", ".--",  "-..-", "-.--", 
                "--..", "|" ]; 

englishLang ="alice";

englishToMorse(code, englishLang, letter);

morseCode = "... -.-. .... --- --- .-.."; 
morseToEnglish(code, morseCode);


/**
 *32. Write a program that finds the longest palindromic substring of a given string. Try to be
as efficient as possible!
 */


function longestPallindromicSubsequence(X,Y,n,m){
    if(n==0 || m==0)
     return 0;

    if(X[n-1]==Y[m-1]){
        return  1+ longestPallindromicSubsequence(X,Y,n-1,m-1);
    }
    else{
        return Math.max(longestPallindromicSubsequence(X,Y,n,m-1),longestPallindromicSubsequence(X,Y,n-1,m))
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

X="agbcba"            // ans -> abcba -> lenght 5
Y = reverseString(X);

console.log("The length of the Longest Pallindromic Subsequence is: ", longestPallindromicSubsequence(X,Y,X.length,Y.length));


/**
 *33.  Given two strings, write a program that efficiently finds the longest common
subsequence.

solved using dynamic programming
 */
function lcs(X,Y,n,m){
    var t = new Array(n+1);
    for(let i=0;i<t.length;i++){
        t[i]= new Array(m+1);
    }

    for(let i=0;i<n+1;i++){
        for(let j=0;j<m+1;j++){
            if(i==0 || j==0){
                t[i][j]=0;
            }
        }
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<m+1;j++){
            if(X[i-1]==Y[j-1]){
                t[i][j]=1+ t[i-1][j-1];
            }
            else{
                t[i][j]=Math.max(t[i][j-1],t[i-1][j]);
            }
        }
    }
    return t[n][m];

}



X="abcdgh"            
Y="abedehr"

console.log("The length of the Longest Common Subsequence is: ", lcs(X,Y,X.length,Y.length));


  /**
 * 34. Given an array with numbers, write a program that efficiently answers queries of the
the difference in array indices. For example in the array [1,4,3,2,5,7], the nearest larger
value for 4 is 5. After linear time preprocessing you should be able to answer queries in
constant time.
 */


function nearestLargestElement(array){
    var stack=new Array();
    let ans =[];
    for(let i=array.length-1;i>=0;i--){
        if(stack.length==0){
            ans.unshift(-1);
            
        }
        else if(stack.length>0 && stack[stack.length-1]>array[i]){
            ans.unshift(stack[stack.length-1]);
        }
        else if(stack.length>0 && stack[stack.length-1]<array[i]){
            while(stack.length>0 && stack[stack.length-1]<array[i]){
                stack.pop();
            }
            if(stack.length==0){
                ans.unshift(-1);
            }
            else{
                ans.unshift(stack[stack.length-1]);
            }        
        }
        stack.push(array[i]);
    }
    return ans;
}


var array = [1,4,3,2,5,7];
console.log("The elements are:",array);
console.log("The Nearest Larger value of element is :",nearestLargestElement(array));

/**
 * 35. Write a function that returns the largest element in a list.
 */

function largestElemet(list){
    list.sort();
    return list[list.length-1];
 }

 let list =[1,2,3,4,5,6];
 console.log("the largest element in a list is :",largestElemet(list))

 /**
 * 36.  Write a function that checks whether an element occurs in a list.
 */

function findElement(list,element){
    for(ele in list){
        if (list[ele]==element){
            return "Found";
        }
    }
    return "Not Found";
}

console.log(findElement([1,2,3,4,5,6],6));

/**
 * 37. 16) Write a function that tests whether a string is a palindrome.
 */

function isPallindrome(str){
    let j=0;
    for(let i=str.length;i>=0;i--){
        if(str[i]===str[j]){
            j++;
        }
    }
    if(j==str.length){
        return true;
    }
    return false;
}

console.log(isPallindrome("Neeraj"));
console.log(isPallindrome("bob"));


//                                      Dom manipulation using

/**
 * 38 Try JavaScript interactively
• If you use Firefox, install Firebug from http://getfirebug.com/. Copy the simple test-page.html
from the section’s source code archive (javascript-getting-started), load it in Firefox, then launch
Firebug by clicking on the Firebug icon or hitting F12. Click on the Console tab and try some
interactive JavaScript commands. Customize the console as described in the notes if you wish.
• If you use Chrome, copy the simple test-page.html from the section’s source code archive (javascript-
getting-started), load it in Chrome, then launch the developer tools with Control-Shift-J.
Click on the Console tab and try some interactive JavaScript commands. Most browsers, even
Internet Explorer and Microsoft Edge have something similar now.
2. Define a variable x and give it a value of 5. Evaluate x and verify it shows the value.
3. Enter this function into the console:
function half(x) {
return(x / 2);
}
*/

/**
 * 39

Try to predict what you will get for half(x), half(4), and half(3). It is simple to predict what you will
get for half(4), but, depending on your programming background, it might not be so easy to predict
what you will get for half(x) and half(3). Call half(x), half(4), and half(3) and see if you were right.
4. Try to predict what you will get if you evaluate x in the console. Is it still 5, or is it 3? Try it and see.
5. Enter this function into the console:
function seven() {
x = 7;
return(x);
}
Call seven() in the console. Try to predict what you will get if you evaluate x in the console. Try it
and see. How do you explain the surprising result?
*/

/**
 * 40.

6. Make a function called calculation that, given three numbers a, b, and c, returns (a + b)/c. Try it
with a few normal values. Then, try to predict what you will get for calculation(1, 1, 0), calculation(-
1, -1, 0), and calculation(1, -1, 0). Try those tests and see if you get what you expected.
 */






 
