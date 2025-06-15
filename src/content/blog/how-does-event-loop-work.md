---
title: 'How does event loop work'
description: ''
pubDate: 'June 08 2025'
heroImage: '/blog-placeholder.jpg'
setup:
---

### Intro
Majority of developers are using javascripts for client side or server side and understand that javascripts is a asynchronous programming, but minority of them know the event loop which is fundamental concept in asynchronous programming.

### Event loop
As I mentioned, Event loop is fundamental concept in async programming usually found in Javascript(in browser and Node). When your javascripts code runs, function calls are placed onto a "Call Stack." Functions are executed in a Last-In, First-Out (LIFO) manner. When a function finishes, it's popped off the stack.

### Microtask

### Macrotask

```javascript
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3)); // Microtask

Promise.resolve().then(() => setTimeout(() => console.log(4))); // Microtask

Promise.resolve().then(() => console.log(5)); // Microtasks

setTimeout(() => console.log(6)); // Macrotask

console.log(7);

//Output: 1 7 3 5 2 6 4.
```