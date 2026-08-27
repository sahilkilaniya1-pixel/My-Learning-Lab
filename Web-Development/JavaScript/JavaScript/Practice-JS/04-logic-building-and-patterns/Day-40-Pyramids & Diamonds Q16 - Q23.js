// Q16. Full Pyramid
function FullPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (n - i); s++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
FullPyramid(5);

// Q17. Inverted Pyramid
function InvertedPyramidSolid(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let s = 1; s <= (n - i); s++) {
            row += " ";
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += "*";
        }
        console.log(row);
    }
}
InvertedPyramidSolid(5);


