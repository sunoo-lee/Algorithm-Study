/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;
  let taskCount = {};

  for (const char of tasks)
    taskCount[char] = taskCount[char] ? taskCount[char] + 1 : 1;
  taskCount = Object.values(taskCount);

  let maxCount = 0;
  let maxValue = 0;

  for (let i = 0; i < taskCount.length; ++i) {
    if (maxValue < taskCount[i]) {
      maxValue = taskCount[i];
      maxCount = 1;
    } else if (maxValue === taskCount[i]) {
      maxCount++;
    }
  }

  return Math.max(tasks.length, (maxValue - 1) * (n + 1) + maxCount)
};
