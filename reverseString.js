function reverseString(s) {
    var a = Array.from(s);

    for (var i = 0; i < a.length / 2; i++) {
        const temp = a[a.length - i - 1];
        a[a.length - i - 1] = a[i];
        a[i] = temp;
    }

    return a.join('');
}

const s = "Hello, world!";
console.log(reverseString(s));
