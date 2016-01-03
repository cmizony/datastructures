//  _     _     _
// | |   (_)___| |_ ___
// | |   | / __| __/ __|
// | |___| \__ \ |_\__ \
// |_____|_|___/\__|___/


/**
* Class Node - Singly linked list
*
* @constructor
* @param {String} [content='']
*/
function Node (content) {
  this.next = null;
  this.data = content || '';
}

/**
* Add new element at the end of the list
* Average complexity:
*   Time O(n)
*   Space O(1)
*
* @method appendToTail
* @param {String} content
* @return {Node} this
*/
Node.prototype.appendToTail = function(content) {
  var cursor = this;
  while (cursor.next !== null) {
    cursor = cursor.next;
  }
  cursor.next = new Node(content);

  return this;
};

/**
* Remove duplicate content from un-sorted list
* Average complexity:
*   Time O(n)
*   Space O(n)
*
*  @method removeDuplicate
*  @return {Node} this
*/
Node.prototype.removeDuplicate = function() {
  var hashtable = {};
  var current = this;
  var previous = null;

  while (current !== null) {
    if (hashtable[current.data]) {
      previous.next = current.next;
    }
    hashtable[current.data] = true;
    previous = current;
    current = current.next;
  }

  return this;
};

/**
* Display the content of the list
* Average complexity:
*   Time O(n)
*   Space O(1)
*
* @method display
* @return {Node} this
*/
Node.prototype.display = function() {
  var node = this;
  var i = 0;
  var output = 'List: ';
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

var list = new Node('First')
  .appendToTail('Second')
  .appendToTail('Second')
  .appendToTail('Third')
  .appendToTail('Fourth')
  .appendToTail('Fourth')
  .display()
  .removeDuplicate()
  .display();
