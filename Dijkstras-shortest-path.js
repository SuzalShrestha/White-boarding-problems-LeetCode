// Description: Dijkstra's shortest path algorithm
let minDistance = (dist, visited) => {
  let min = Infinity;
  let minIndex = -1;
  for (let i = 0; i < dist.length; i++) {
    if (!visited[i] && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
};
let dijkstra = (graph, src) => {
  let len = graph.length; // number of vertices
  let dist = new Array(len).fill(Infinity); // distance from source to each vertex
  let visited = new Array(len).fill(false); // visited vertices
  dist[src] = 0; // distance from source to source is 0
  for (let i = 0; i < len; i++) {
    let u = minDistance(dist, visited); // get the vertex with the minimum distance
    visited[u] = true; // mark the vertex as visited
    for (let v = 0; v < len; v++) {
      if (
        // if the vertex is not visited, there is an edge between u and v, and the distance from source to u + the distance from u to v is less than the distance from source to v
        !visited[v] &&
        graph[u][v] &&
        dist[u] !== Infinity &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v]; // update the distance from source to v
      }
    }
  }
  return dist;
};
// let graph = [
//   [0, 4, 0, 0, 0, 0, 0, 8, 0],
//   [4, 0, 8, 0, 0, 0, 0, 11, 0],
//   [0, 8, 0, 7, 0, 4, 0, 0, 2],
//   [0, 0, 7, 0, 9, 14, 0, 0, 0],
//   [0, 0, 0, 9, 0, 10, 0, 0, 0],
//   [0, 0, 4, 14, 10, 0, 2, 0, 0],
//   [0, 0, 0, 0, 0, 2, 0, 1, 6],
//   [8, 11, 0, 0, 0, 0, 1, 0, 7],
//   [0, 0, 2, 0, 0, 0, 6, 7, 0],
// ];
// console.log(dijkstra(graph, 0));
// Output: [ 0, 4, 12, 19, 21, 11, 9, 8, 14 ]
// Time complexity: O(V^2)
// Space complexity: O(V)
// using queue
let dijkstraQ = (graph, src) => {
  let len = graph.length;
  let dist = new Array(len).fill(Infinity);
  let visited = new Array(len).fill(false);
  dist[src] = 0;
  let queue = [];
  queue.push(src);
  while (queue.length !== 0) {
    let u = queue.shift();
    visited[u] = true;
    for (let v = 0; v < len; v++) {
      if (
        !visited[v] &&
        graph[u][v] &&
        dist[u] !== Infinity &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
        queue.push(v);
      }
    }
  }
  return dist;
};
// console.log(dijkstraQ(graph, 0));
