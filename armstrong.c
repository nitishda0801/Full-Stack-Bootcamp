
#include <stdio.h>
#include <math.h>
int main()
{
    int n,sum=0,r,t,c=0;
    printf("enter the number");
    scanf("%d",&n);
    t=n;
    c=0;
    while(n>0)
    {
        r=n%10;
       c++;
        n=n/10;
    }
    n=t;
    while(n!=0)
    {
        r=n%10;
        sum+=pow(r,c);
        n=n/10;
    }
    if(sum==t)
    {
       printf("armstrong ");
 
    }
    else
    printf("not armstrong");

    return 0;
}
