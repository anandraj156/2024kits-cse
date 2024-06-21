let employees = [
    {name:'dravid',sal:20000},
    {name:'dravid',sal:30000},
    {name:'dravid',sal:25000}
];

for(let i=0; i<employees.length; i++)
    {
        if(employees[i].sal<25000 || employees[i].sal==25000)
            {
                console.log(employees[i].sal);
            }
    }