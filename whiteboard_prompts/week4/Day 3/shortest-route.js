// Vertex class
class Vertex{
  constructor(id){
    this.id = id !== undefined? id : null;
    this.edges = [];
  }
}

var vertexA = new Vertex(1);
var vertexB = new Vertex(2);
var vertexC = new Vertex(3);
var vertexD = new Vertex(4);
var vertexE = new Vertex(5);
var vertexF = new Vertex(6);
var vertexG = new Vertex(7);

vertexA.edges.push(vertexB, vertexC, vertexD);
vertexB.edges.push(vertexA, vertexE);
vertexC.edges.push(vertexA, vertexF);
vertexD.edges.push(vertexA, vertexG);
vertexE.edges.push(vertexB, vertexG);
vertexF.edges.push(vertexC, vertexG);
vertexG.edges.push(vertexD, vertexE, vertexF);

console.log(vertexA);


function shortestRoute(startVertex, endVertex){
  let queue = [startVertex];
  let set = new Set();
  set.add(startVertex.id);
  // let results = [];

  let stops = 0;
  while (queue.length > 0) {
    let currentVertex = queue.shift();
    console.log('CURRENT VERTEX: ', currentVertex);
    
    if (currentVertex.id === endVertex.id) {
      return stops;
    }
    // results.push(currentVertex.id);

    currentVertex.edges.forEach((edge) => {
      if (!set.has(edge.id)) {
        queue.push(edge);
        set.add(edge.id);
      }
    });
    
    stops++;
  }
  

  return stops;
}

console.log(shortestRoute('MIN STOPS: ', vertexA, vertexF));



// generate graph from int and array of arrays
// function deserialize(n, edges){
//   let vertices = {};
//   while (n--){
//     vertices[n] = new Vertex(n);
//   }
//   let v1;
//   let v2;
//   edges.forEach(edge => {
//     console.log(edge);
//     v1 = edge[0];
//     v2 = edge[1];
//     vertices[v1].edges.push(vertices[v2]);
//     vertices[v2].edges.push(vertices[v1]);
//   });

//   return vertices[0];
// }

// graph is the vertex with id 0
// const graph = deserialize(7, [[1,2],[1,3],[1,4],[4,7],
                              // [2,5],[5,7],[3,6],[7,6]]);
