const arr=["hello",1,2,3,];
const[first,second,third]=arr;
console.log(second);
//  destrucing for objects
const obj={
    employee:"ram",
    employeeId:1,
    employeesalary:50000,
    address:"kodad"
};
 const{ employee,employeeId,employeesalary,address}=obj;
 console.log(employeeId);
// rest operator
 const arr2=[1,2,3,4,5];
 const[firstString,...remaining]=arr2;
 console.log(remaining);
// rest parameter in function
function displayNames(...names){
    console.log('the names are:',names);
}
displayNames("Ram", "Charan", "Prathas", "Tr.NTR", "Maheshbabu");

// Array Assignment and Reference
const arr3 = ["a", "b", "c"];
const arrCopy = [...arr3]; // Create a copy instead of reference

arr3.push("d");

console.log(arrCopy);
console.log(arr3);    

// Merging Objects using Spread Operator
const car1 = { name: "BMW", price: "1 Cr" };
const car2 = { color: "White", engineCC: 5000 };

const car = { ...car1, ...car2 };
console.log(car); 

// Sum of Squares Function
function sumOfSquares(val1, val2) {
    function square(val) {
        return val * val;
    }

    let firstValue = square(val1);
    let secondValue = square(val2);

    return firstValue + secondValue;
}

const answer = sumOfSquares(2, 3);
console.log(answer); 

// Sum of Cubes Function
function sumOfCubes(val1, val2) {
    function cube(val) {
        return val * val * val;
    }

    let firstValue = cube(val1);
    let secondValue = cube(val2);

    return firstValue + secondValue;
}

const ans = sumOfCubes(2, 3);
console.log(ans);

// Higher-Order Function Example
function sumOfSomething(val1, val2, callbackFn) {
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2);

    return firstValue + secondValue;
}

const ans2 = sumOfSomething(2, 3, cube);
console.log(ans2); 

// setTimeout Example
setTimeout(() => console.log("Hello Everyone!"), 2000);


