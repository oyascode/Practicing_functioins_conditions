
# Assignment

* Create an array with three elements  
  * The second element should be a function  
  * Use the function outside the array  
* Complete the looping/do it properly  
* Complete the dom assisgnment  

* Explain the difference between these blocks of code
```js
for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}
 
footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})
```
***********************************************************************************************************************************

* ## Create an array with three elements  
  * ### The second element should be a function  
  * ### Use the function outside the array  

```js
  const mixedArr = [
    {
      name: {
        firstName: "Alexander",
        lastName: "Doe"
      },
      race: "Alien",
      height: "20ft"
    },

    race => `Hello frail and gittery ${race}!`,

    ['Dinosaur', 'Dragon', 'Leviathan']
  ]

      console.log(mixedArr[1]("Humans")); // This will output "Hello frail and gittery humans"  
```

## Explain the difference between these blocks of code  

```js
for ( club of footBallClubs ) {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
}
 
footBallClubs.forEach((club) => {
 const objectValues = Object.values(club)
 const secondValue = objectValues[1]
 
 console.log(secondValue)
})
```
There is no difference between the two blocks of code. The two blocks use different methods to achieve the same result

Unlike the `For` and the `for....in` loops which give access to the array index, the `For...of` and `forEach` looping construct give access to the the array element itself.  





