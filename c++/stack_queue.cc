#include <cstdlib>
#include <iostream>
#include "stack.cc"

using namespace std;

class MyQueue 
{
		private:
				Stack *stack_in;
				Stack *stack_out;

				void transfer (Stack *source, Stack *destination)
				{
						while (source->peek() != -1)
								destination->push(source->pop());
				}

		public:
				MyQueue () 
				{
						stack_in = new Stack();
						stack_out = new Stack();
				}

				~MyQueue() 
				{
						delete(stack_in);
						delete(stack_out);
				} 

				int pop ()
				{
						// Test if stack_in not empty
						if (stack_in->peek() != -1)
								this->transfer(stack_in,stack_out);

						unsigned int data = stack_out->pop();
						cout << "pop: " << data <<endl;
		
						return data;
				}

				void push (unsigned int data)
				{
						// test if stack_out not empty
						if (stack_out->peek() != -1)
								this->transfer(stack_out,stack_in);

						stack_in->push(data);

						cout << "push: " << stack_in->peek() <<endl;
				}
};

int main (int argc, char** argv)
{
		cout<<"Implement queue behavior using 2 stacks" << endl;
		MyQueue* queue = new MyQueue();

		queue->push(1);
		queue->push(2);
		queue->push(3);

		queue->pop();
		queue->pop();
		queue->pop();

		delete queue;

		return 0;
}
