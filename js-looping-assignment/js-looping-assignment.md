Explain Infinite Loops with Example  
Explain For loops with Example  
Explain For each loops with Example  
Explain For of loops with example  
Use the ForEach loop to loop through an array of objects and log the second property of each object to the console  
..................................................................................................................................................................................................................................................................................

# **Infinite Loop**  


Infinite loop is a sequence of instruction to loops continually without end. This can be as a result of either of the following:  


1. No terminating condition  
2. Having a terminating condition that can never be met  
3. Having a terminating condition that causes the loop to start all over  

### **Example**
```js
let iteration = 6;  

while ( iteration > 0) {  
	console.log('Iteration: ' + iteration[i])  
	iteration++  
}  
```  


# **For Loop**  
The for loop is a statement that allows us iterate a process. It consits of three expressions:  


1. *Initialization*-A variable declaration evaluates once before looping begins  
2. *Condition*-An expression to be evaluated before each iteration  
3. *Final-expression*-Used to increment the counter variable  

These three expressions are wrapped in parenthesis separated by semicolon.

### *Example*  
```js
let tubers = ['Yam', 'Potato', 'Cassava']

for (let index = 0; index < tubers.length; i++) {
   console.log(tubers[index]);
   // more statements here...
}
```  


# **For Each Loop**  

As the name implies, a for each `forEach()` method calls a `callback` function ones for every element in an array in an ascending index order.  

### *Example*  

```js
let meals = ['Breakfast', 'Lunch', 'Brunch', 'Dinner'];

meals.forEach(meal => {
  console.log('I just had a sumptuous ' + meal);
})
```

# **For...Of Loop**  

The `for...Of` loop provide a way to loop through iterable objects like array and string. It iterates over property values.  

# *Example*  

```js
let meals = ['Breakfast', 'Lunch', 'Brunch', 'Dinner'];

for (let element of meals) {
  console.log(element);
}
```  

## **Use the ForEach loop to loop through an array of objects and log the second property of each object to the console**  

```js

const skillUpStudents = [
	{
		track: 'Frontend',
		name: 'Samuel',
		age: 26
	},

	{
		track: 'Frontend',
		name: 'Emmanuel',
		age: 26
	},

	{
		track: 'Backend',
		name: 'OgheneVwede',
		age: 26
	},

	{
		track: 'Backend',
		name: 'Olayiwola',
		age: 26
	}
];

skillUpStudents.forEach(skillUpStudent => {
	console.log(skillUpStudent.name)
})
```










