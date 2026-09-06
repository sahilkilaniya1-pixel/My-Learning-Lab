// #include <iostream>
// using namespace std;

// int main()
// {
// cout << "Hello coders";
// return 0;
// }

#include <iostream>
#include <string>
using namespace std;

int main()
{
    string name;
    cout << "Enter your good name: ";
    getline(cin, name);
    
    cout << "Hello " << name;
    return 0;
}