//  ____             _             ____                      _
// / ___|  ___  _ __| |_          / ___|  ___  __ _ _ __ ___| |__
// \___ \ / _ \| '__| __|  _____  \___ \ / _ \/ _` | '__/ __| '_ \
//  ___) | (_) | |  | |_  |_____|  ___) |  __/ (_| | | | (__| | | |
// |____/ \___/|_|   \__|         |____/ \___|\__,_|_|  \___|_| |_|

module.exports = {
  version: '1.0',

  /**
  * Swap elements in array
  *
  * @swap
  * @param {Array} array
  * @param {Integer} i
  * @param {Integer} j
  */
  swap: function(array, i, j) {
    if (i !== j) {
      var tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  },

  /**
  * Sort array using bubbleSort
  * Average Complexity
  *   Time O(n*n)
  *   Space O(1)
  *
  * @method bubbleSort
  * @param {Array} array
  * @return {Array}
  */
  bubbleSort: function(array) {
    for (var i=0; i < array.length - 1; ++i) {
      for (var j=i + 1; j < array.length; ++j) {
        if (array[i] > array[j]) {
          this.swap(array,i,j);
        }
      }
    }

    return array;
  },

  /**
  * Sort array using selectionSort
  * Average Complexity
  *   Time O(n*n)
  *   Space O(1)
  *
  * @method selectionSort
  * @param {Array} array
  * @return {Array}
  */
  selectionSort: function(array) {
    for (var i=0; i < array.length; ++i) {
      var indiceMin = i;

      for (var j=i +1; j < array.length; ++j) {
        if (array[j] < array[indiceMin]){
         indiceMin = j;
        }
      }
      this.swap(array, i, indiceMin);
    }

    return array;
  },

  /**
  * Sort array using mergeSort
  * Average Complexity
  *   Time O(N * Log(N))
  *   Space O(Log(N))
  * Worse Complexity
  *   Time O(N * Log(N))
  *   Space O(N)
  *
  * @method mergeSort
  * @param {Array} array
  * @return {Array}
  */
  mergeSort: function(array) {
    function merge(low, middle, high) {
      var cursorLeft = low;
      var cursorRight = middle + 1;
      var cursorCurrent = low;
      var helper = array.slice(); // Clone array

      while (cursorLeft <= middle && cursorRight <= high) {
        if (helper[cursorLeft] <= helper[cursorRight]) {
          helper[cursorCurrent] = helper[cursorLeft];
          cursorLeft++;
        }
        else {
          helper[cursorCurrent] = helper[cursorRight];
          cursorRight++;
        }
        cursorCurrent++;
      }

      for (var i=0; i <= (middle - cursorLeft); ++i) {
        helper[i + cursorCurrent] = helper[i + cursorLeft];
      }
    }

    function sort(low,high) {
      if (low < high) {
        var middle = (low + high) / 2;
        sort(low, middle);
        sort(middle + 1, high);
        merge(low, middle, high);
      }
    }

    sort(0, array.length - 1);
    return array;
  },

  /**
  * Sort array using quickSort FIXME
  * Average Complexity
  *   Time O(N * Log(N))
  *   Space O(Log(N))
  * Worse Complexity
  *   Time O(n*n)
  *   Space O(Log(N))
  *
  * @method quickSort
  * @param {Array} array
  * @return {Array}
  */
  quickSort: function(array) {
    function partition(left, right) {
      var pivot = array[(left + right) / 2];

      while(left <= right) {
        while(array[left] < pivot) {
          left++;
        }
        while(array[right] > pivot) {
          right--;
        }
        if (left <= right) {
          swap(array,left, right);
          left++;
          right--;
        }
      }

      return left;
    }

    function sort(left, right) {
      var index = partition(left, right);
      if (left < index - 1) {
        sort(left,index - 1);
      }
      if (index < right) {
        sort(index, right);
      }
    }

    var swap = this.swap;
    sort(0, array.length -1);
    return array;
  },

  /**
  * Search element in sorted array
  * Average Complexity
  *   Time O(Log(N))
  *   Space O(1)
  *
  * @method binarySearch
  * @param {Array} array
  * @param {Integer} element
  * @return {Boolean}
  */
  binarySearch: function(array, element) {
    var low = 0;
    var high = array.length - 1;

    while(low <= high){
      var middle = parseInt((low + high) / 2, 10);

      if(array[middle] < element) {
        low = middle + 1;
      }
      else if(array[middle] > element) {
        high = middle - 1;
      }
      else {
        return true;
      }
    }
    return false;
  }

};

//  __  __           _       _                _____         _
// |  \/  | ___   __| |_   _| | ___          |_   _|__  ___| |_ ___
// | |\/| |/ _ \ / _` | | | | |/ _ \  _____    | |/ _ \/ __| __/ __|
// | |  | | (_) | (_| | |_| | |  __/ |_____|   | |  __/\__ \ |_\__ \
// |_|  |_|\___/ \__,_|\__,_|_|\___|           |_|\___||___/\__|___/
//

var array = [3,6,2,5,1,4];
console.log('bubbleSort() => ' + module.exports.bubbleSort(array));
console.log('selectionSort() => ' + module.exports.selectionSort(array));
console.log('mergeSort() => ' + module.exports.mergeSort(array));
console.log('quickSort() => ' + module.exports.quickSort(array));

array = [1,2,3,4,5,6];
console.log('binarySearch(5) => ' + module.exports.binarySearch(array,5));
console.log('binarySearch(10) => ' + module.exports.binarySearch(array,10));
