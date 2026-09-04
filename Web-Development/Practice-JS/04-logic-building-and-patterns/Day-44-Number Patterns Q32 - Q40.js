// Q38. Palindromic Number
function PrintpalindromicPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= n - i; s++) {
            row += "  ";
        }
        for (let j = 1; j <= i; j++) {
            ``
            row += j + " ";
        }
        for (let j = i - 1; j >= 1; j--) {
            row += j + " ";
        }
        console.log(row);
    }
}
PrintpalindromicPattern(5);