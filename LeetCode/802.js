/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const safeNode = new Map();
  const result = [];

  const dfs = (v) => {
    // safeNode에 이미 있는지 확인하고 없으면 false로 추가한다.
    if(safeNode.has(v)) return safeNode.get(v);
    safeNode.set(v, false);
    // vortex와 연결된 edge를 탐색한다. 연결된 vortex가 false라면 false를 반환한다.
    // 반복문을 통과할 수 있다면 마지막이 terminal node라는 의미다.
    for(const neighbor of graph[v]) {
      if(!dfs(neighbor)) return false;
    }
    safeNode.set(v, true);
    return true;
  }

  for (let i = 0; i < graph.length; ++i) {
    if (dfs(i)) result.push(i);
  }

  return result;
};

//참고: https://youtu.be/Re_v0j0CRsg
