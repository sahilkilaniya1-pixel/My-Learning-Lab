function getSumTriangle(arr) {
    if (!arr.length) return [];
    const triangle = [arr];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        const curr = triangle[triangle.length - 1];
        const next = [];
        for (let j = 0; j < curr.length - 1; j++) {
            next.push(curr[j] + curr[j + 1]);
        }
        triangle.push(next);
    }
    return triangle.reverse().flat();
}
console.log(getSumTriangle([4, 7, 3, 6, 7]));