let first = {name: 'John', age:100},  //first  , second , third are the objects
    second = {name: 'John', age:200}, 
    third = {name: 'John', age:240};



let max;
if(first.age>second.age && first.age>third.age)
    {
       max=first.age;
    }
else if(second.age>third.age)
    {
        max = second.age;
    }
else
    {
        max = third.age;
    }

    let min;
if(first.age<second.age && first.age<third.age)
    {
        min=first.age;
    }
else if(second.age<third.age)
    {
        min = second.age;
    }
else
    {
        min = third.age;
    }
let secondmax;

secondmax = (first.age + second.age + third.age) - min - max;
console.log(secondmax);
