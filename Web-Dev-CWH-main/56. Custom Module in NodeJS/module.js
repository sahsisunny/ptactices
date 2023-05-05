// Funcrion to find average of array
function average(arr) {
     var sum = 0;
     for (var i = 0; i < arr.length; i++) {
          sum += arr[i];
     }
     return sum / arr.length;
}

// Exporting the function
module.exports = {
     average: average
};