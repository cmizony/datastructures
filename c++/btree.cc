
struct Node {
  Node *left;
  Node *right;
  unsigned int value;
};

class Btree 
{
  private:

    Node* root;

  public:

    static Node* createNode (unsigned int value)
    {
      Node *new_node = new Node();
      new_node->left = NULL;
      new_node->right = NULL;
      new_node->value = value;

      return new_node;
    }


    Btree ()
    {
      root = NULL;
    }

    ~Btree()
    {
      emptyTree(root);
    }

    void emptyTree(Node* node)
    {
      if (NULL != node)
        return;

      emptyTree(node->left);
      emptyTree(node->right);

      delete node;
    }

    void setRoot(Node* node)
    {
      if (NULL != root)
        emptyTree(root);

      root = node;
    }

    Node* getRoot ()
    {
      return root;
    }

    /**
     *
     * Node: Does not work
     */
    void add (unsigned int value)
    {
      Node *new_node = this->createNode(value);

      if (NULL == root)
      {
        root = new_node;
        return;
      }

      Node *current_node = root;
      Node *current_child = root;
      bool position_found = false;

      while(!position_found)
      {
        current_child = value <= current_node->value ?
          current_node->left :
          current_node->right;

        if (current_child == NULL)
        {
          current_child= new_node;
          position_found = true;
        }
        else
          current_node = current_child;
      }

    }
};
