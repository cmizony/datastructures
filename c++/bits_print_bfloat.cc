#include <cstdlib>
#include <iostream>
#include <string>
#include "bits.cc"

using namespace std;

void printBinaryFloat (float n)
{
  if (n < 0 || n > 1)
    cout << "ERROR" << endl;

  string representation (".");
  float factor = 0.5;

  while (n != 0)
  {
    if (n >= factor)
    {
      representation += "1";
      n -= factor;
    }
    else
      representation += "0";

    factor /= 2;

    if (representation.length() > 32)
    {
      cout<<"ERROR"<<endl;
      return;
    }
  }

  cout<<representation<<endl;
}

int main (int argc, char **argv)
{

  printBinaryFloat(0.25);
  printBinaryFloat(0.35);

  return EXIT_SUCCESS;
}
