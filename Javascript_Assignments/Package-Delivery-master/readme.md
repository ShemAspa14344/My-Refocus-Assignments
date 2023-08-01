<h1 style="text-align: center;">Package Delivery 💻🖥️</h1>

# Introduction

<p> Hello students 👋 In this repository we will check if your assignment passed the requirement. </p>

## Requirements:

Create a program that will convert the duration of each delivery from seconds to a readable format. For example, 5212 seconds should be converted to 1 hour, 26 minutes, and 52 seconds.

---

## Steps:

### 1. First we need to create a js file named "javascript_function2".

### 2. Define a function named "toHours" with one parameter named "seconds".

```javascript
function toHours(seconds) {
  //Code Here...
}
```

### 3. Create a variable named "hours" inside the function and set its value to `Math.floor(seconds / 3600);`.

```javascript
...
let hours = Math.floor(seconds / 3600);
...
```

### 4. Create another variable inside the function named "remainder" and set its value to a statement that computes the remainder of "seconds" divided by 3600.

```javascript
...
let remainder = seconds % 3600;
...
```

### 5. Use the "return" keyword to set the function output as an object with two key value pairs. The first key is "hour" set to the "hours" variable. The second key is "remainder" set to the "remainder" variable. If you remember on our videos that key value pair is also called an object.

```javascript
...
return {
  hour: hours,
  remainder: remainder
}
...
```

### 6. Define a function named "toMinutes" with one paramter named "seconds".

```javascript
...
function toMinutes(seconds) {
  //Code Here...
}
...
```

### 7. Create a variable named "minutes" inside the function and set its value to `Math.floor(seconds / 60);`.

```javascript
...
let minutes = Math.floor(seconds / 60);
...
```

### 8. Create another variable named "remainder" and set its value to a statement that computes the remainder of "seconds" divided by 60.

```javascript
...
  let remainder = seconds % 60;
...
```

### 9. Similarly to the "toHours" function, we will return these variable in a key value pairs using return keyword.

```javascript
...
  return { minutes: minutes, remainder: remainder };
...
```

### 10. Now that all calculation functions are done, let's create the function that will print the converted duration. We need to create a new function named "humanDuration" with one parameter "duration".

```javascript
...
function humanDuration(duration) {
  //Code Here...
}
...
```

### 11. Inside the function we just created we will add a new variable named "hoursObject" and the value of it will be the returned value when we call the "toHours" function with the "duration" as our argument.

```javascript
...
let hoursObject = toHours(duration);
...
```

### 12. Next, we need to get the remaining minutes. To do this we need to create a new variable named "minutesObject". The value will be the returned value when we call the "toMinutes" function with the calculated remainder by our "hoursObject" variable.

```javascript
...
let minutesObject = toMinutes(hoursObject.remainder);
...
```

### 13. After that we will create another variable named "seconds" with the value of the calculated remainder of our "minutesObject" variable.

```javascript
...
let seconds = minutesObject.remainder;
...
```

### 14. Then to finish up our function that will print the converted value, let's console log the results.

```javascript
...
console.log(
  `The formatted duration of ${duration} is ${hoursObject.hours} ${
    hoursObject.hours > 1 ? "Hours" : "Hour"
  }, ${minutesObject.minutes} ${
    minutesObject.minutes > 1 ? "Minutes" : "Minute"
  } and ${seconds} ${seconds > 1 ? "Seconds" : "Second"}`
);
...
```

### 15. Lastly let's call the "humanDuration" function to check if our code is correct.

```javascript
...
humanDuration(4800);
humanDuration(5212);
humanDuration(300);
...
```

---

# The End

<p> Don't worry if some of your approach is not the same on this repository, it doesn't mean that it is wrong. This is just a guide for you on how to make it. </p>
Happy Coding! 🧑‍💻👩‍💻
