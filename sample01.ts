import Immutable from 'immutable';

const map2: { [id: string]: string; } = {};
map2['a'] = 'b';
map2['c'] = 'd';

// delete map['c'];

// Output: undefined
console.log(map2['c']);

let nameAgeMapping = new Map<string, number>();

nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);

//1. Iterate over map keys

for (let key of nameAgeMapping.keys()) {
    console.log(key);                   //Lokesh Raj John
}

//2. Iterate over map values
for (let value of nameAgeMapping.values()) {
    console.log(value);                 //37 35 40
}

//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}

//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}

const map = Immutable.Map<string, string>({ a: 'b', c: 'd' });
console.log(map.get('a')); // 'b'