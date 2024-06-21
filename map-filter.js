let numbers=[10,20,30,40,50];
let divideBy5=numbers.map((e) =>{
return e/5;
})
console.log(divideBy5)
let lessThan30 = numbers.filter((e)=>{
    return e<30;
})
console.log(lessThan30)

let employee = [
    {name:'Anand',sal:20000},
    {name:'jaya',sal:40000},
    {name:'raju',sal:30000}
];
let names=employee.map((emp)=>{
    return emp.name
    
})
console.log(names)


let filteredemps = employee.filter((emp)=>{
    return emp.sal<=25000
})
console.log(filteredemps);

//purpose of this program is filtering the data 