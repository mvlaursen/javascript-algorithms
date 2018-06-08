function* MyStupidGenerator() {
    var response;
    const responses = ["burp!", "fart!", "boom!", "yay!", "boo!", "done"];
    
    while ((response = responses[Math.floor(responses.length * Math.random())]) !== "done")
        yield response;
}

const iter = MyStupidGenerator();
while (!((response = iter.next()).done)) {
    console.log(response.value);
}