
function sayHello(){
    let n = "Ahmed";
    n += " Mohamed";
    console.log("Hello " + n);
}

sayHello();

// console.log(n);

var n1 =10;
var n1 =20;
console.log(n1);

const PI = 22/7;

console.log(PI);

console.log("--------------------");

let empoyee = {
    firstName : "Doaa",
    lastName : "Mohamed",
    job : "Instructor",
    salary : 5000,
    get : function (){
        console.log( this.firstName + " " 
            + this.lastName + " My job is " 
            + this.job + " My Salary=" 
            + this.salary);
    }
};
empoyee.get();
console.log(empoyee)



let rect ={
    width : 10,
    height :15,
    area : function (){
        return this.width * this.height;
    }
};

console.log(rect.width);
console.log(rect.height);
console.log(rect.area());

console.log("--------------------");


let names = ["Ahmed" , "Mohamed" , "Sara" , "Dina" ,"Dalia"];

console.log(names);
console.log(names.length);
console.log(names[0]);
console.log(names[4]);
names[5] = "Dina";
console.log(names);
console.log(names.length);


let namesSet = new Set(["Ahmed" , "Mohamed" , "Ahmed" , "Dina" ,"Dalia"]);
console.log(namesSet.size);



for (const element of namesSet) {
    console.log(element);
}

let studentDegrees = new Map([
    ["Ahmed" , 50],
    ["Dina" , 40],
    ["Dalia" , 60]
]);

studentDegrees.set("Sara" ,45);
console.log(studentDegrees.size);
console.log(studentDegrees.get("Dalia"));


let allDegrees = new Map([
    ["Ahmed" , {math:50 , arabic:55 , scince:60}],
    ["Dina" , {math:53 , arabic:53 , scince:63}],
    ["Dalia" , {math:52 , arabic:52 , scince:62}]
]);


let ahmedDegrees = allDegrees.get("Ahmed");
console.log("math : " + ahmedDegrees.math);
console.log(ahmedDegrees.arabic);
console.log(ahmedDegrees.scince);

// console.log(allDegrees.get("Ahmed").math);
// console.log(allDegrees.get("Ahmed").arabic);
// console.log(allDegrees.get("Ahmed").scince);


console.log("--------------------");


class Employee{
    constructor(firstName , lastName , job ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.job=job;
    }

    print(){
        return  this.firstName + " " 
        + this.lastName + " My job is " 
        + this.job ;
    }
}


let emp2 = new Employee("Mohamed" , "Omar" , "Sales");
console.log(emp2.print());


let emp3 = new Employee("Dalia" , "Omar" , "Customer Services");
console.log(emp3.print());

