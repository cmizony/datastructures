//  ____                          _
// |  _ \ ___  ___ _   _ _ __ ___(_) ___  _ __
// | |_) / _ \/ __| | | | '__/ __| |/ _ \| '_ \
// |  _ <  __/ (__| |_| | |  \__ \ | (_) | | | |
// |_| \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|


module.exports = {
  version: '1.0',

  /**
  * Compute the nth Fibonacci number
  * Complexity:
  *  Time O(e(n))
  *  Space O(1)
  *
  *  @method naiveFibonacci
  *  @param {Integer} nth
  *  @return {Integer}
  */
  naiveFibonacci: function(nth) {
    function fibonacci(i) {
      if (i === 0) {
        return 0;
      }
      if (i === 1) {
        return 1;
      }

      return fibonacci(i - 1) + fibonacci(i - 2);
    }

    return fibonacci(nth);
  },

  /**
  * Compute the nth Fibonacci number
  * Complexity:
  *  Time O(n)
  *  Space O(n)
  *
  *  @param {Integer} nth
  *  @return {Integer}
  */
  recursiveFibonacci: function(nth) {
    function fibonacci(i) {
      if (i === 0) {
        return 0;
      }
      if (i === 1) {
        return 1;
      }
      if (cache[i]) {
        return cache[i];
      }

      cache[i] = fibonacci(i - 1) + fibonacci(i - 2);
      return cache[i];
    }

    var cache = [];
    return fibonacci(nth);
  },

  fibonacciTests: function() {
    console.log('naiveFibonacci(8) => ' + this.naiveFibonacci(8));
    console.log('recursiveFibonacci(8) => ' + this.recursiveFibonacci(8));
  }
};

//  __  __           _       _                _____         _
// |  \/  | ___   __| |_   _| | ___          |_   _|__  ___| |_ ___
// | |\/| |/ _ \ / _` | | | | |/ _ \  _____    | |/ _ \/ __| __/ __|
// | |  | | (_) | (_| | |_| | |  __/ |_____|   | |  __/\__ \ |_\__ \
// |_|  |_|\___/ \__,_|\__,_|_|\___|           |_|\___||___/\__|___/
//

module.exports.fibonacciTests();
