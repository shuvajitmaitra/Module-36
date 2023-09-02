const myObject = {
    name: "shuvo",
    age: 24,
    address: "dhaka"
}

const objectString = JSON.stringify(myObject);
localStorage.setItem("myObject", objectString);
localStorage.getItem("myObject");
const parseObject = JSON.parse(objectString)
console.log(parseObject.name)