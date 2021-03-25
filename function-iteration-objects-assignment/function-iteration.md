# **Assignment**  
  * Explain HOF with examples   
  * Explain the map and reduce methods with examples  


## **Higher Order Functions**

Higher order functions are functions that accept other functions as argument and/or return another function as output.  

### **Example of function as argument**
Function passed as argument in the map iteration method below  
```js
const numArr = [1, 2, 3, 4, 5, 6];

const doubledArr = numArr.map(item => item * 2);
console.log(doubledArr); // [2, 4, 6, 8, 10, 12]
```

### **Example of function as return**
```js
const calcVolume = () => {
	const height = 5;
	const length = 3;
	const breadth = 7;

	const volume = () => {
		const outcome = (length * breadth * height)
		return outcome;
	}
	return volume;
}

console.log(calcVolume());
```

## **The Map Iteration Method**

This is a built-in array method used in manipulating an array to. It takes an argument of a callback function and return a new array  

### **Example**
```js
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
```

## **The Reduce Iteration Method**

The reduce iteration method returns a single value after iterating through the elements of an array. It takes majorly a callback function as argument and optionallly a second argument that takes an initial value  for accumulation.  

### **Example**
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // outputs 10
```

