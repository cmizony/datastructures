#include <cstdlib>
#include <iostream>
#include <list>
#include <cmath>
#include "btree.cc"

using namespace std;

bool isTreeBalanced (Node* root)
{
	if (NULL == root)
		return true;

	list<Node*> current_nodes;
	list<Node*> child_nodes;
	int total_nodes = 0;
	int height = 1;

	current_nodes.push_front(root);

	while (!current_nodes.empty())
	{
		Node* node = current_nodes.front();
		current_nodes.pop_front();
		total_nodes ++;

		if (node->left)
			child_nodes.push_back(node->left);
		if (node->right)
			child_nodes.push_back(node->right);

		if (current_nodes.empty() &&
				!child_nodes.empty())
		{
			height ++;
			current_nodes = child_nodes;
			child_nodes.clear();
		}
	}

	return height <= log2(total_nodes)+1;
}

int main (int argc, char** argv)
{
	cout<<"Function that check if a binary tree is balanced" << endl;

	Btree* tree = new Btree();

	Node* root = Btree::createNode(1);
	Node* node_a = Btree::createNode(2);
	Node* node_b = Btree::createNode(3);
	Node* node_c = Btree::createNode(4);
	Node* node_d = Btree::createNode(5);

	root->left = node_a;
	root->right = node_b;
	node_a->left = node_c;
	node_b->left = node_d;

	tree->setRoot(root);

	cout<<"Is tree balanced? "<< isTreeBalanced(tree->getRoot()) <<endl;
	delete tree;

	return EXIT_SUCCESS;
}
