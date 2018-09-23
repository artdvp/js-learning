// 8 x 8 grid
/**
 *  # # # # 
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 */
let size = 8;

for (let i = 0; i < size; i++) {
    let x = "";
    for (let j = 0; j < size; j++) {
        x += (i % 2 === 0) ? (j % 2 === 0 ? " " : "#") : (j % 2 === 0 ? "#" : " ");
    }
    console.log(x)
}