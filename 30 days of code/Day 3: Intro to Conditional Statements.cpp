/* 
Task 
Given an integer,n , perform the following conditional actions:

If n is odd, print Weird
If n is even and in the inclusive range of  to , print Not Weird
If n is even and in the inclusive range of  to , print Weird
If n is even and greater than , print Not Weird
Complete the stub code provided in your editor to print whether or not n is weird.
*/

#include <bits/stdc++.h>

using namespace std;



int main()
{
    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    if(n%2!=0)
    {
        cout<<"Weird";
    }else if(n%2==0)
    {
        if(n>2 && n<5)
        {
            cout<<"Not Weird";
        }
        else if(n>6 && n<=20)
        {
            cout<<"Weird";
        }
        else if(n>20)
        {
            cout<<"Not Weird";
        }
    }
    return 0;
}
