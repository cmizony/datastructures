#include <cstdlib>
#include <iostream>
#include <bitset>
#include "bits.cc"

using namespace std;

int insertBit (int M, int N, int i, int j)
{
  int count = 0;
  for (int k = i ; k < j ; k++)
  {
    if (getBit(M,count))
    {
      N = setBit(N,k);
    }
    else
      clearBit(N,k);
    count++;
  }

  return N;
}

int main (int argc, char **argv)
{
  int M = 10;
  int N = 5;

  cout << "M: " << (bitset<32>) M <<endl;
  cout << "N: " << (bitset<32>) N <<endl;

  cout << "R: " << (bitset<32>) insertBit(M,N,9,12) << endl;

  return EXIT_SUCCESS;
}
