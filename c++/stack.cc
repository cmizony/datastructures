
class Stack 
{
	private:

		struct Node
		{
			Node *next;
			unsigned int data;
		};

		Node *top;

	public:

		Stack (): top(NULL) {}

		~Stack ()
		{
			Node *current = top;

			while (current != NULL)
			{
				Node* next = current->next;
				delete(current);
				current = next;
			}
			top = NULL;
		}

		int peek ()
		{
			if (NULL == top)
				return -1;

			return top->data;
		}

		int pop ()
		{
			if (NULL == top)
				return -1;

			int data = top->data;
			top = top->next;
			return data;
		}

		void push (unsigned int data)
		{
			Node* node = new Node();

			node->data = data;
			node->next = top;
			top = node;
		}

};
