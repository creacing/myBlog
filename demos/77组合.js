var combine = function(n, k) {
    const res = []

    const dfs = (stack, start, n, k) => {
        console.log(stack);
        if (k === 0) {
            res.push(stack.slice())
            return
        }

        for (let i = start; i <= n; i++) {
            stack.push(i)
            dfs(stack, i + 1, n, k - 1)
            stack.pop()
        }
    }
    dfs([], 1, n, k)
    return res
};

console.log(combine(3, 3));