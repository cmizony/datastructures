
bool getBit (int num, int i)
{
	return (num & (1 << i)) != 0;
}

int setBit (int num, int i)
{
	return num | (1 << i);
}

int clearBit (int num, int i)
{
	int mask = ~(1 << i);
	return num & mask;
}

int clearBitsRight (int num, int i)
{
	int mask = ~((1 << (i+1)) -1);
	return num & mask;
}

int clearBitsLeft (int num, int i)
{
	int mask = (1 << (i+1)) -1;
	return num & mask;
}

