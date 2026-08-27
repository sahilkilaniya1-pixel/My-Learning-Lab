// Q9. Left-Aligned Triangle
function LeftAlignedTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let s = 1; s <= i; s++) {
            row += "*";
        }
        console.log(row);
    }
}
LeftAlignedTriangle(5);

// Q10. Inverted Left Triangle
function InvertedLeftTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i - 1; j++) {
            row += " ";
        }
        for (let s = 1; s <= n - i + 1; s++) {
            row += "*";
        }
        console.log(row);
    }
}
InvertedLeftTriangle(n);





// Q11. Right Parallelogram
function RightParallelogram(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (i - 1); s++) {
            row += " ";
        }
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
RightParallelogram(5);



// Q12. Left Parallelogram
function LeftParallelogram(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (n - i + 1); s++) {
            row += " ";
        }
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
LeftParallelogram(5);

// Q13. MirroredHalfDiamond
function MirroredHalfDiamond(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (n - i); s++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let s = 1; s <= (n - i); s++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
MirroredHalfDiamond(5);



// Q14. Wide Space Triangle
function WideSpaceTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (n - i); s++) {
            row += "  ";
        }
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
WideSpaceTriangle(3);

// Q15. Shifted Square
function ShiftedSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
ShiftedSquare(3);