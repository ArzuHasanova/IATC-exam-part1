var rotateMatrix = function(matrix) {
    return flipMatrix(matrix.reverse());
  }
  
  var flipMatrix = function(matrix) {
    return matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  }