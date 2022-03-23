var subsets = function(nums) {
    const n = nums.length

    const k = nums.length
    const res = []
    for (let k = 0; k <= n; k++) {
        dfs(nums, [], n, k, 0, res)
    }
    return res
};


function dfs(nums, stack, n, k, start, res) {
    // console.log(stack);
    if (k === 0) {
        res.push(stack.slice())
        return
    }

    for (let i = start; i < n; i++) {
        stack.push(nums[i])
        dfs(nums, stack, n, k - 1, i + 1, res)
        stack.pop()
    }
}
console.log(subsets([1, 2, 3]));