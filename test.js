var getPermutation = function(n, k) {
    const res = []
    const nums = []
    const dic = {}
    for (let i = 1; i <= n; i++) {
        nums[i - 1] = i
        dic[i - 1] = false
    }

    const traceBack = (stack) => {
        if (stack.length === nums.length) {
            res.push(stack.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            if (!dic[i]) {
                stack.push(nums[i])
                dic[i] = true
                traceBack(stack)
                stack.pop()
                dic[i] = false
            }

        }

    }
    traceBack([])
    return res[k - 1].join('')
};

console.log(getPermutation(4, 9));