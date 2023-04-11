/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);

    let twoBefore = cost[0];
    let oneBefore = cost[1];

    for (let i=2; i<cost.length; ++i) {
        let current = Math.min(oneBefore, twoBefore) + cost[i];

        twoBefore = oneBefore;
        oneBefore = current;
    }
    
    return Math.min(twoBefore, oneBefore);
};
