/*
## Перепишите в виде класса
Есть класс CoffeeMachine, заданный в функциональном стиле.

**Задача**: переписать CoffeeMachine в виде класса с использованием прототипа.

Исходный код:

```javascript
function CoffeeMachine(power) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

    this.run = function() {
    	setTimeout(function() {
			console.log('Coffee is ready!');
    	}, getTimeToBoil());
	};
	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
```
*/

class CoffeeMachine {

  static WATER_HEAT_CAPACITY() {
    return 4200
  }

  constructor(power) {
    this.power = power;
    this.waterAmount = 0;
  }
}

CoffeeMachine.prototype.getTimeToBoil = function () {
  return this.waterAmount * CoffeeMachine.WATER_HEAT_CAPACITY() * 80 / this.power;
};

CoffeeMachine.prototype.run = function () {
  setTimeout(function() {
    console.log('Coffee is ready!');
  }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
  this.waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

