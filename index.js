// add object in local storage...................
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


// Add array in local storage................
const myArray = [1, 2, 3, 4, 5, 6, 7];
const arrayString = JSON.stringify(myArray)
localStorage.setItem('myArray', arrayString)
localStorage.getItem('myArray')
const parseArray = JSON.parse(arrayString)