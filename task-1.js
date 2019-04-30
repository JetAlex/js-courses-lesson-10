/*
## Добавить функциям delay
Добавьте всем функциям в прототип метод delay(ms), который откладывает вызов функции на ms миллисекунд.
После этого должен работать такой код:

```javascript
function f() {
  console.log('hello');
}
f.delay(1000); // выведет "hello" через 1 секунду

// или с параметрами:
function f2(a, b) {
  console.log(a + b);
}
f2.delay(1000)(1, 2); // выведет 3 через 1 секунду.
```

*/

Function.prototype.delay = function (delay) {
  setTimeout( this, delay);
};

function f() {
  console.log('hello');
}

f.delay(1000);

Function.prototype.delay = function (delay, ...args) {
  setTimeout( () => this.apply(null, args), delay);
};

function f2(a, b) {
  console.log(a + b);
}
f2.delay(1000, 1, 2);

