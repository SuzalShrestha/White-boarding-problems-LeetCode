var getNeighbors = function (row, col, matrix) {
  let neighbors = [];
  let up = [row - 1, col];
  let down = [row + 1, col];
  let right = [row, col + 1];
  let left = [row, col - 1];
  if (up[0] >= 0 && matrix[up[0]][up[1]] === "1") {
    neighbors.push(up);
  }
  if (down[0] < matrix.length && matrix[down[0]][down[1]] === "1") {
    neighbors.push(down);
  }
  if (right[1] < matrix[0].length && matrix[right[0]][right[1]] === "1") {
    neighbors.push(right);
  }
  if (left[1] >= 0 && matrix[left[0]][left[1]] === "1") {
    neighbors.push(left);
  }
  return neighbors;
};
var numIslands = function (grid) {
  let row = grid.length;
  let column = grid[0].length;
  let count = 0;
  let visited = new Set();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let item = grid[i][j];
      let index = [i, j];
      if (item === "1" && !visited.has(index.toString())) {
        let stack = [[i, j]];
        count++;
        visited.add(index.toString());
        while (stack.length > 0) {
          let node = stack.pop();
          let neighbors = getNeighbors(node[0], node[1], grid);
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
              stack.push(neighbor);
              visited.add(neighbor.toString());
            }
          }
        }
      }
    }
  }
  return count;
};
