function mergeSortedLists(a, b) {
    var m = [];
    var iA = 0;
    var iB = 0;

    while (iA < a.length && iB < b.length) {
        if (a[iA] <= b[iB])
            m.push(a[iA++]);
        else
            m.push(b[iB++]);
    }

    if (iA < a.length)
        m = m.concat(a.slice(iA, a.length));
    
    if (iB < b.length)
        m = m.concat(b.slice(iB, b.length));

    return m;
}

function binaryMergeSort(a) {
    if (a.length > 1) {
        const middle = a.length / 2;
        const r1 = binaryMergeSort(a.slice(0, middle));
        const r2 = binaryMergeSort(a.slice(middle, a.length));
        return mergeSortedLists(r1, r2);
    } else
        return a.slice();
}

const a = [10, 5, 20, 25, 1, 7, 30, 0];
console.log(binaryMergeSort(a));