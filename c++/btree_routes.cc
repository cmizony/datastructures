#include <cstdlib>
#include <iostream>
#include <vector>
#include <algorithm>
#include "btree.cc"

using namespace std;


bool isRoute(Node* current,vector<Node*>* nodes)
{
  if (NULL == current)
    return false;

  nodes->erase(remove(nodes->begin(),nodes->end(),current),nodes->end());

  if (nodes->empty())
    return true;

  isRoute(current->left,nodes);
  isRoute(current->right,nodes);
}

Node* firstFound (Node* current,vector<Node*>* nodes)
{
  if (find(nodes->begin(),nodes->end(),current) != nodes->end())
    return current;

  Node* found = firstFound(current->left,nodes);

  return found ? found : firstFound(current->right,nodes);
}

bool isRouteBetweenNodes (Node* root, vector<Node*>* nodes)
{
  Node* subtree = firstFound(root,nodes);

  isRoute(subtree,nodes);

  return nodes->empty();
}

int main (int argc, char** argv)
{
  cout<<"Function that check if there is a path between two nodes" << endl;

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

  vector<Node*> nodes;
  nodes.push_back(node_a);
  nodes.push_back(node_c);

  cout<<"Is route? "<< isRouteBetweenNodes(tree->getRoot(),&nodes) <<endl;
  delete tree;

  return EXIT_SUCCESS;
}
