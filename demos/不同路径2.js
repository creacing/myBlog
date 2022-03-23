//1表示障碍物 0表示空格
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
        return 0
    }
    obstacleGrid[0][0] = 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue
            }
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0
                continue
            }
            //0行
            if (i === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1]
                continue
            }
            //0列
            if (j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j]
                continue
            }

            if (obstacleGrid[i][j] !== 1) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            }
        }
    }

    return obstacleGrid[m - 1][n - 1]

};



console.log(uniquePathsWithObstacles(
    [

        [0, 0],
        [1, 1],
        [0, 0]

    ]
));
// 0 1

// || (obstacleGrid[i][j - 1] && obstacleGrid[i][j - 1] !== 0)




// //1表示障碍物 0表示空格
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     const m = obstacleGrid.length
//     const n = obstacleGrid[0].length
//     if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
//         return 0
//     }

//     obstacleGrid[0][0] = 1
//         // const store = []

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {

//             // if (i === 0 || j === 0) {
//             //     console.log(i, j, obstacleGrid[i][j]);
//             //     if (obstacleGrid[i][j] !== 1 && ((obstacleGrid[i - 1] && obstacleGrid[i - 1][j] !== 0))) {
//             //         console.log('hhh');
//             //         obstacleGrid[i][j] = 1
//             //     } else {
//             //         obstacleGrid[i][j] = 0
//             //         console.log('vvv');

//             //     }
//             // } else {
//             //     if (obstacleGrid[i][j] === 1) {
//             //         obstacleGrid[i][j] = 0
//             //     } else {
//             //         obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
//             //     }
//             // }

//         }
//     }
//     return obstacleGrid[m - 1][n - 1]

// };

// // console.log(uniquePathsWithObstacles([
// //     [0],
// //     [1]
// // ]));

// console.log(uniquePathsWithObstacles([
//     [1, 0]
// ]));
// // 0 1

// // || (obstacleGrid[i][j - 1] && obstacleGrid[i][j - 1] !== 0)