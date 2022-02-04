var array= [2,28,12,97,15,10],
a=0,
p=1,
i;

for(i=0; i<array.length; i++)
{
    a = a+ array[i];
    p = p*array[i];

}
console.log("sum of the integer is :"+a);
console.log("product of the integer is :"+p);

