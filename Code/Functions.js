function sayHello(nameOfPerson, age) {
  console.log('Hello my name is ' + nameOfPerson + " and I'm " + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(fistNumber, secondNumber) {
  console.log(fistNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('Hello ' + otherPersonsName + ' nice to meet you!');
  },
};
console.log(player.name);
player.sayHello('lynn');
player.sayHello('nico');
