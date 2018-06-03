class Functional {
//    constructor() {
//        super();
//    }

    mapExample(a) {
        return a.map(item => item.length);
    }

    filterExample(a) {
        return a.filter(item => item.length > 5);
    }

    reduceExample(a) {
        return a.reduce((totalLength, item) => totalLength + item.length, 0);
    }

    chainExample(a) {
       return a.filter(item => item.length > 5)
        .map(item => item.length)
        .reduce((totalLength, item) => totalLength + item, 0);
    }
}

const functional = new Functional();
console.log(functional.mapExample(['apple', 'banana', 'cinammon']));
console.log(functional.filterExample(['apple', 'banana', 'cinammon']));
console.log(functional.reduceExample(['apple', 'banana', 'cinammon']));
console.log(functional.chainExample(['apple', 'banana', 'cinammon']));

