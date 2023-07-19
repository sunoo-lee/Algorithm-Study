/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if(prerequisites.length === 0) return true;
  if(prerequisites.length === 1) return true;
  const graph = new Map();

  // Map으로 그래프를 작성한다.
  for (const [v, e] of prerequisites) {
    graph.set(v, [...graph.get(v) || [], e]);
  }

  console.log(graph);

  // Set으로 탐색 여부를 저장한다.
  const visited = new Set();

  const dfs = (course) => {
    // roof 탐색
    if(visited.has(course)) return false;
    // 선수 과목 완료 
    if(!graph.has(course)) return true;

    // 방문 여부 확인
    visited.add(course);
    // 연결된 edge 마다 탐색한다.
    for(const pre of graph.get(course)) {
      if(!dfs(pre)) return false;
    }
    // 방문 여부 삭제
    visited.delete(course);
    // 완료된 선수 과목 삭제
    graph.delete(course);
    return true;
  }

  for( let i = 0; i < numCourses; ++i) {
    if(!dfs(i)) return false;
  }
  return true;
};

// 참고 https://youtu.be/EgI5nU9etnU
