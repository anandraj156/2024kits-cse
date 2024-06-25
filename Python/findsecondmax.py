a=int(input("first number"))
b=int(input("second number"))
c=int(input("third number"))

if a>b and a>c:
    max=a
elif b>c:
    max=b
else:
    max=c
if a<b and a<c:
    min=a
elif b<c:
    min=b
else:
    min=c
smax = (a+b+c)-max-min

print("The Second max is",max)
