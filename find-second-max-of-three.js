let first = 10 
let second = 10
let third = 20

let max;
if(first>second && first>third && second>third)
    {
       max=first;
    }
else if(second>third)
    {
        max = second;
    }
else
    {
        max = third;
    }

    let min;
if(first<second && first<third )
    {
        min=first;
    }
else if(second<third)
    {
        min = second;
    }
else
    {
        min = third;
    }
let secondmax;

secondmax = (first + second + third) - min - max;
console.log(secondmax);
