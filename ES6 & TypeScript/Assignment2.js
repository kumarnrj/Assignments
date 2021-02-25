/**
 * 1.	Symbols: Write a class that defines next() method to return next number from 
 * Fibonacci series. The class will have a private attributes ‘previousNo’ & ‘currentNo’.
 */

 class Fibo{
     #previousNo=Symbol();
     #currentNo=Symbol();
     constructor(){
        this.#previousNo=0;
        this.#currentNo=1;
     }
     next(){
        
         let nxt=Symbol();
         nxt = this.#previousNo+this.#currentNo;
         this.#previousNo=this.#currentNo;
         this.#currentNo=nxt;
        
         return nxt;
     }
 }

 let obj =new Fibo();
 console.log(obj.next());

/**
 * 2.	Iterators: Write a program that returns next Armstrong number after 
 * calling getNextArmstrong() method.
 */
/*
const  listArmStrong=[0, 1, 153, 370, 371, 407];
const iterator = listArmStrong[Symbol.iterator]();
function getNextArmstrong(){
    
    return iterator.next().value;
}

console.log(getNextArmstrong());
console.log(getNextArmstrong());
console.log(getNextArmstrong());
*/
/**
 * 3.	Generators: Write a program that returns next Armstrong number after 
 * calling getNextArmstrong() method. Add functionality to reset generating 
 * Armstrong number from zero. In case, Armstrong number goes above one thousand then
 *  throw an error.
 */

function isArmstrong(num){
    let d=0;
    let n1=num;
    
    
    while(n1>0){
        d++;
        n1=Math.floor(n1/10);
    }
    let n=num;
    let arm=0;
    
    while(n>0){
        rem = n%10;
        console.log(rem);
        arm = arm+Math.pow(rem,d);
      
        n = Math.floor(n/10);
    }
  
    if(arm==num){
        return true;
    }
    else{
        return false;
    }
}

 function *getNextArmstrong(){
        var num =153;
        if(isArmstrong(num)){
            console.log(num);
            num++;
        }
        yield "please wait";
        return "Returend";
 }
 var g = getNextArmstrong();
console.log(g.next());
console.log(g.next().value)
console.log(g.next().value)

