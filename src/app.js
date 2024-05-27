let ranks = ['A', 'B', 'C'];

// 遍历字符数组，打印字符
for(let rank of ranks)
    console.log(rank);

const person = {
    firstName: 'John',
    lastName: 'Doe'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

// apply的用法
let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);
