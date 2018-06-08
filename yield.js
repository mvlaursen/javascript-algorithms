function* Yieldinator() {
    yield "Burp!";
}

const iter = Yieldinator();
console.log(iter.next().value);