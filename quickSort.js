function partition(a, iStart, nLength) {
    if (nLength < 1) {
        throw "Array must have at least one member for partition to be meaningful.";
    }

    var iLowLength = iStart;
    var iPivotValue = iStart + nLength - 1;

    console.log("Partioning: " + a.slice(iStart, iPivotValue) + " with pivot: " + a[iPivotValue]);

    for (var iUnknown = iStart; iUnknown < iPivotValue; iUnknown++) {
        if (a[iUnknown] < a[iPivotValue]) {
            const temp = a[iUnknown];
            a[iUnknown] = a[iLowLength];
            a[iLowLength] = temp;
            iLowLength++;
        }
    }

    const iPivot = iLowLength;
    const temp = a[iPivot];
    a[iPivot] = a[iPivotValue];
    a[iPivotValue] = temp;
    return iPivot;
}

function quickSortAux(a, iStart, nLength) {
    if (nLength > 1) {
        const iPivot = partition(a, iStart, nLength);
        quickSortAux(a, iStart, iPivot - iStart);
        quickSortAux(a, iPivot + 1, iStart + nLength - iPivot - 1);
    }
}

function quickSort(a) {
    quickSortAux(a, 0, a.length);
}

var aToPartition = [10, 9, 8, 7, 6, 5, 11, 12, 13, 15, 14, 17, 20];
quickSort(aToPartition);
console.log("aToPartition: " + aToPartition);