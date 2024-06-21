let employees = [
    {name:'dravid',sal:20000},
    {name:'dravid',sal:30000},
    {name:'dravid',sal:25000}
];
let sum=0

for(let i=0; i<employees.length; i++)
    {
        console.log(employees[i].name);
        sum=sum+employees[i].sal;
    }
    console.log(sum);
