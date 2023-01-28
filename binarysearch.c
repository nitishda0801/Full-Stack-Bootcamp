#include<stdio.h>
int binarySearch(int arr[], int size, int element)
{
    int low, mid, high;
    low=0;
    high=size-1;
    while(low<=high)
    {
        mid = (low + high)/2;
        if(arr[mid] == element)
        {
            return mid;
        }
        if(arr[mid]<element)
        {
            low = mid+1;
        }
        else
        {
            high = mid -1;
        }
    } 
    return -1;
}
int main()
{
    int n;
    printf("enter size\n");
    scanf("%d",&n);
    int a[10],i;
    printf("enter element\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    int element;
    printf("enter element to search\n");
    scanf("%d",&element);
    int elementindex=binarySearch(a,n,element);
    if(elementindex==-1)
    printf("element not found");
    else
    printf("index of %d was:%d",element,elementindex);
    return 0;
    
}