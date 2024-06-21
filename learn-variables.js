varfirst = 10;
function f() {
    first = 20;
}

f() 
    console.log(first);

function g() {
    let second = 30;
    let third = 40;
    {
        console.log(second);
        
    }
    console.log(second ,third); 
}
g()

//we can run this file in CMD that is  C:\Users\manch\2024kits-cse\2024kits-cse>node let-const.js