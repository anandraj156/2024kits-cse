let n=12345
let m=0;
while(n>0)
    {
        let y=n%10;
        m = m * 10+y;
        n=parseInt(n/10);
    }
    console.log(m);
    