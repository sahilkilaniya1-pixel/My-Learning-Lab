#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 10, temp;
    cout << "Before swap: a = " << a << ", b = " << b << endl;
    temp = a;
    a = b;
    b = temp;
    cout << "After swap: a = " << a << ", b = " << b << endl;
    return 0;
}



// #include <iostream>
// using namespace std;

// int main()
// {
//     int a = 5, b = 10;
//     a = a + b;
//     b = a - b;
//     a = a - b;

//     cout << "a = " << a << ", b = " << b << endl;
//     return 0;
// }


