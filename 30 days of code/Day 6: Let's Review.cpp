/*
Given a string S, of length N that is indexed from 0 to N-1 print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.
*/

#include <iostream>

using namespace std;

int main() {
    int N;
    cin >> N;

    for (int i = 0; i < N; i++) {
        string str;
        cin >> str;

        for (int j = 0; j < str.length(); j++) {
            if (j % 2 == 0) cout << str[j];
        }

        cout << " ";

        for (int j = 0; j < str.length(); j++) {
            if (j % 2 != 0) cout << str[j];
        }

        cout << endl;
    }

    return 0;
}
