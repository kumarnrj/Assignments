/**
 * 1. Make a Rectangle class that stores a width and a height. Make a few instances and print out the
properties. Modify a few of the properties and print out the results again.
 */


class Rectangle{
   
  constructor(width,height){
      this.width=width;
      this.height=height;
  }
  
  getArea() {
      return this.width*this.height;
  }
}

 r = new Rectangle(10,20);
console.log(r.width);
console.log(r.height);



r1 = new Rectangle(30,20);
console.log(r1.width);
console.log(r1.height);
r1.width=45;
console.log(r1.width);
console.log(r1.height);


/**
 * 2. Add a getArea method. Use the prototype property.
 */
console.log(r1.getArea());

/**
 * 3. Assuming that the Rectangle constructor takes a width and a height, why does the following output
20 instead of 200? (Hint: if you see an answer that seems too obvious to be what I am looking for,
it probably is the answer I am looking for.)
 */

 r2 = new Rectangle(4, 5);
r2.height = 50;
console.log(r2.getArea());


/**
Make a variable whose value is an object with firstName and lastName properties, but don’t define
a Person class first. Try looking up the first and last names. Try changing the last name. It seems
very odd to Java programmers to make an object without first defining a class, but JavaScript programmers
do this sort of thing all the time.
 */

 var person ={
    firstname:"neeraj",
    lastname:"kumar"
 }

 console.log(person)
 console.log("First name: ",person.firstname);
 console.log("Last name: ",person.lastname);

 person.lastname="test";
 console.log("Last name: ",person.lastname);
 console.log(person)

 /**
  * 5. Try reading the middleName property from your variable above. Try assigning to the middleName
property. Try reading the property again after you assign to it. Is this behavior a good thing or a bad
thing?
  */
 console.log(person.middleName);

 person.middleName ="haryy";
 console.log(person.middleName);
 console.log(person);
 
 // this behaviou will not be acceptable in some case it we do not middle name 
 // in our program but by assigning the property value it automatically append 
 // it with the object which we lead to the security issue.

 /**
6. Create a string that contains what looks like an object with firstName and lastName properties. Use
“eval” to turn it into a real object, and test it the same way you did with the previous object that you
created directly.
  */

 var string = "{firstName:'neeraj', lastName:'kumar'}";
 eval('var obj='+string);
console.log(obj.firstName);

/**
 7. Do the same with JSON.parse. You have to follow strict JSON rules in this case.
 */
var params = '[{"firstname":"neeraj","lastname":"kumar"}]';
newobj = JSON.parse(params)
console.log(newobj[0].firstname)



/**
 * 1. Write a JS program to create object of person with fields as follows:-
fname - string
lname - string
age - int
skills - array
address - object
city - string
pincode - int
dateOfBirth - Date
married - Boolean
profession - string
Create minimum 2 objects and display the object's detail uisng global print method.

 */

function personObj(fname,lname,age,skills,dateofbirth,address,married,profession)
{
this.fname=fname;
this.lname=lname;
this.age=age;
this.skills=skills;
this.dateofbirth=dateofbirth;
this.address=address;
this.married=married;
this.profession=profession;
}
person1=new personObj("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
person2=new personObj("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst")

print=function()
{
console.log(person1);
console.log(person2);
}();


/**
 * 2. Modify the above program to create 2 objects, amitabh and abhishek, here abhishek has some
common properties from amitabh, try to use it such common properties from amitabh instead of
creating it in abhishek.

 */
 
amithab=new personObj("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")

abhisheik=new personObj("abhisheik",21,"HTML","08/06/1997","false","jr analyst")
abhisheik=Object.create(amithab);
print=function()
{
console.log(amithab);
console.log(abhisheik.lname);
console.log(abhisheik.address);
}();


/**
 * 3. Modify the above code to create third object as "Aaradhya", this object shares the common
properties from amitabh as well as abhishek accordingly demostrate on your own.
 */
Aaradhya = new personObj();
Aaradhya = Object.create(amithab,abhisheik);
print=function()
{
  console.log(Aaradhya)
console.log("Aardhya last name: ",Aaradhya.lname);
console.log("Aardyha's address ",Aaradhya.address);
}();


/**
4. Create a JS program to implement below:-
BankAccount
|(accountNumber)
|(accountHolderName)
|(accountBalance)
-------------------------
| |
Savings Current
(isSalary) (odLimit)
 */

class BankAccount{
  constructor(accounNumber,accountHolderName,accountBalance){
    this.accounNumber= accounNumber;
    this.accountBalance = accountBalance;
    this.accountHolderName = accountHolderName;
  }
}

class Saving extends BankAccount{
  constructor(accounNumber,accountHolderName,accountBalance,isSalary){
    super(accounNumber,accountHolderName,accountBalance);
    this.isSalary = isSalary;
  }

  widthraw(amount){
    if(this.accountBalance>=amount){
      this.accountBalance = this.accountBalance-amount;
      console.log("Now the Amount is ",this.accountBalance);
    }
    else{
      console.log("Insufficient balance");
    }
  }
}

class Current extends BankAccount{
  constructor(accounNumber,accountHolderName,accountBalance,odLimit){
    super(accounNumber,accountHolderName,accountBalance);
    this.odLimit = odLimit;
  }

  widthraw(amount){
    if(this.accountBalance>=amount && this.odLimit>=amount){
      this.accountBalance = this.accountBalance-amount;
      console.log("Now the Amount is ",this.accountBalance);
    }
    else{
      console.log("Insufficient balance");
    }
  }
}

savingAccountobj = new Saving(11,"john",1500,true);
savingAccountobj.widthraw(500);

curerntAccountobj = new Current(11,"john",1500,500);
curerntAccountobj.widthraw(500);