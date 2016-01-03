//  ____  _             _
// / ___|| |_ __ _  ___| | _____
// \___ \| __/ _` |/ __| |/ / __|
//  ___) | || (_| | (__|   <\__ \
// |____/ \__\__,_|\___|_|\_\___/


/**
* Class Node
*
* @constructor
* @param {String} [content='']
*/
function Node(content) {
  this.next = null;
  this.data = content || '';
}

/**
* Class Stack
*
* @constructor
*/
function Stack(content) {
  this.top = content ? new Node(content) : null;
}

/**
* Remove first element stack
* Average complexity:
*   Time O(1)
*   Space O(1)
*
* @method pop
* @return {String}
*/
Stack.prototype.pop = function() {
  var result = null;

  if (this.top !== null) {
    result = this.top.data;
    this.top = this.top.next;
  }
  return result;
};

/**
* Remove element at specific position
* Average complexity:
*   Time O(N)
*   Space O(1)
*
* @method popAt
* @param {Integer} index
* @return {String}
*/
Stack.prototype.popAt = function(index) {
  var i = 0;
  var previous  = null;

  for (var current = this.top ; current !== null ; current = current.next) {
    if (i === index) {
      previous.next = current.next ;
      return current.data;
    }
    previous = current;
    i++;
  }
};

/**
* Add element on stack
* Average complexity:
*   Time O(1)
*   Space O(1)
*
*  @method push
*  @param {String} content
*  @return {Stack} this
*/
Stack.prototype.push = function(content) {
  var node = new Node(content);
  node.next = this.top;
  this.top = node;

  return this;
};

/**
* Display the content of the stack
* Average complexity:
*  Time O(n)
*  Space O(1)
*
* @method display
* @return {Node} this
*/
Stack.prototype.display = function() {
  var node = this.top;
  var i = 0;
  var output = 'Stack: ';
  do {
    output += '[' + i + '] => ' + node.data + ' ; ';
    i += 1;
    node = node.next;
  } while (node !== null);
  console.log(output);

  return this;
};

//  __  __           _       _                _____         _
// |  \/  | ___   __| |_   _| | ___          |_   _|__  ___| |_ ___
// | |\/| |/ _ \ / _` | | | | |/ _ \  _____    | |/ _ \/ __| __/ __|
// | |  | | (_) | (_| | |_| | |  __/ |_____|   | |  __/\__ \ |_\__ \
// |_|  |_|\___/ \__,_|\__,_|_|\___|           |_|\___||___/\__|___/
//

var stack = new Stack()
  .push('First')
  .push('Second')
  .push('Third')
  .push('Fourth')
  .display();

stack.pop();
stack.display();
stack.popAt(1);
stack.display();
