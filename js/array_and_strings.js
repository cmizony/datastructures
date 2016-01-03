//  ____  _        _
// / ___|| |_ _ __(_)_ __   __ _ ___
// \___ \| __| '__| | '_ \ / _` / __|
//  ___) | |_| |  | | | | | (_| \__ \
// |____/ \__|_|  |_|_| |_|\__, |___/
//                         |___/


/**
* Replace character at index. Strings in javascript are immutable,
* so we will consider this function being O(1)
*
* @method replaceAt
* @param {Integer} index
* @param {String} character
* @return {String}
*/
String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

/**
* Sort character in a string
* We will consider this function being O(N(log(N))
*
* @method sort
* @return {String}
*/
String.prototype.sort = function() {
  return this.split('').sort().join('');
};

module.exports = {
  version: '1.0',

  /**
  * Determine if string has all unique characters
  * Average complexity:
  *   Time O(N)
  *   Space O(N)
  *
  * @method isStringUnique
  * @param {String} string
  * @return {Boolean}
  */
  isStringUnique: function(string) {
    var hashtable = {};
    for (var i=0; i < string.length; ++i) {
      var character = string[i];

      if (hashtable[character]) {
        return false;
      }
      hashtable[character] = true;
    }
    return true;
  },

  isStringUniqueTest: function () {
    var strings = [ '', 'abcd' ,'abbcd' ];
    for (var i=0; i < strings.length; ++i) {
      console.log('isStringUnique(' + strings[i] + ') => ' + this.isStringUnique(strings[i]));
    }
  },

  /**
  * Reverse a string
  * Average complexity:
  *   Time O(N)
  *   Space O(1)

  * @method reverseString
  * @param {String} string
  * $return {String}
  */
  reverseString: function(string) {
    for (var i=0; i < string.length/2 ; ++i) {
      var tmp = string[i];
      var j = string.length - i - 1;
      string = string.replaceAt(i, string[j]); // O(1)
      string = string.replaceAt(j, tmp); // O(1)
    }
    return string;
  },

  reverseStringTest: function() {
    var strings = [ '', 'abcd', 'abc' ];
    for (var i=0; i < strings.length; ++i) {
      console.log('reverseString(' + strings[i] + ') => ' + this.reverseString(strings[i]));
    }
  }
};

//  __  __           _       _                _____         _
// |  \/  | ___   __| |_   _| | ___          |_   _|__  ___| |_ ___
// | |\/| |/ _ \ / _` | | | | |/ _ \  _____    | |/ _ \/ __| __/ __|
// | |  | | (_) | (_| | |_| | |  __/ |_____|   | |  __/\__ \ |_\__ \
// |_|  |_|\___/ \__,_|\__,_|_|\___|           |_|\___||___/\__|___/
//

module.exports.isStringUniqueTest();
module.exports.reverseStringTest();
