function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);

  for (var i = 1; i <= k; i++) {
    a.push(a.shift());
  }

  console.log(a.join(' '));
}

/*
Input (stdin)
5 4
1 2 3 4 5
Your Output (stdout)
5 1 2 3 4
Expected Output
5 1 2 3 4
*/
