//  _____                              ____                 _
// |_   _| __ ___  ___  ___           / ___|_ __ __ _ _ __ | |__  ___
//   | || '__/ _ \/ _ \/ __|  _____  | |  _| '__/ _` | '_ \| '_ \/ __|
//   | || | |  __/  __/\__ \ |_____| | |_| | | | (_| | |_) | | | \__ \
//   |_||_|  \___|\___||___/          \____|_|  \__,_| .__/|_| |_|___/


/**
* Class BNode
* Binary graph
*
* @constructor
* @param {String} [content='']
*/
function BNode(content) {
  this.left = null;
  this.right = null;
  this.data = content || '';
}

/**
* Class Node
* graph
*
* @constructor
* @param {String} [content='']
*/
function Node(content) {
  this.childs = [];
  this.data = content || '';
}

/**
* Recursive Deep first search
* Average complexity:
*   Time O(N)
*
* @method recursiveDFS
* @param {String} string
* @return {Boolean}
*/
Node.prototype.recursiveDFS = function(string) {
  function DFS(node) {
    if (node === null) {
      return false;
    }

    if (node.data === string) {
      return true;
    }
    node[visitedToken] = true;

    for (var i=0; i < node.childs.length; ++i) {
      var child = node.childs[i];

      if (!child[visitedToken]) {
        if (DFS(node.childs[i])) {
          return true;
        }
      }
    }

    return false;
  }

  var visitedToken = 'token' + (Math.random() * 1000 + 100);
  return DFS(this);
};

/**
* Iterative Deep first search
* Average complexity:
*   Time O(N)
*
* @method iterativeDFS
* @param {String} string
* @return {Boolean}
*/
Node.prototype.iterativeDFS = function(string) {
  var visitedToken = 'token' + (Math.random() * 1000 + 100);
  var stack = [this];

  while (stack.length > 0) {
    var node = stack.pop(); // pop (top)

    if (node.data === string) {
      return true;
    }
    node[visitedToken] = true;

    for (var i=0; i < node.childs.length; ++i) {
      var child = node.childs[i];

      if (!child[visitedToken]) {
        stack.push(child); // push (top)
      }
    }
  }

  return false;
};

/**
* Breadth first search
* Average complexity:
*   Time O(N)
*
* @method BFS
* @param {String} string
* @return {Boolean}
*/
Node.prototype.BFS = function(string) {
  var visitedToken = 'token' + (Math.random() * 1000 + 100);
  var queue = [this];

  while (queue.length > 0) {
    var node = queue.pop(); // dequeue (end)

    if (node.data === string) {
      return true;
    }
    node[visitedToken] = true;

    for (var i=0; i < node.childs.length; ++i) {
      var child = node.childs[i];

      if (!child[visitedToken]) {
        queue.unshift(child); // enqueue (top)
      }
    }
  }

  return false;
};

//  __  __           _       _                _____         _
// |  \/  | ___   __| |_   _| | ___          |_   _|__  ___| |_ ___
// | |\/| |/ _ \ / _` | | | | |/ _ \  _____    | |/ _ \/ __| __/ __|
// | |  | | (_) | (_| | |_| | |  __/ |_____|   | |  __/\__ \ |_\__ \
// |_|  |_|\___/ \__,_|\__,_|_|\___|           |_|\___||___/\__|___/
//

/**
* Graph example generated:
*
* A
* |_ B
* |  |_ D
* |  |  |_ G
* |  |     |
* |  |_ E _|
* |
* |_ C
* |  |_ F
*/

var nodeA = new Node('A');
var nodeB = new Node('B');
var nodeC = new Node('C');
var nodeD = new Node('D');
var nodeE = new Node('E');
var nodeF = new Node('F');
var nodeG = new Node('G');

// Tree
nodeA.childs.push(nodeB, nodeC);
nodeB.childs.push(nodeD, nodeE);
nodeC.childs.push(nodeF);
nodeD.childs.push(nodeG);

// Graph
nodeE.childs.push(nodeG);
nodeG.childs.push(nodeE);

console.log('recursiveDFS("B") => ' + nodeA.recursiveDFS('B'));
console.log('recursiveDFS("Z") => ' + nodeA.recursiveDFS('Z'));
console.log('iterativeDFS("B") => ' + nodeA.iterativeDFS('B'));
console.log('iterativeDFS("Z") => ' + nodeA.iterativeDFS('Z'));
console.log('BFS("B") => ' + nodeA.BFS('B'));
console.log('BFS("Z") => ' + nodeA.BFS('Z'));
