Object-Oriented Privilege
=========================

Demonstrating and reminding myself how privilege works using simple mathematics.

### Simple Example

First, we create a new utopia where everyone is the same level of intelligence, and everyone will exert the same amount of effort, on average. That way, if everyone works the same number of times, they should end up with the same amount of success.

```javascript
var Utopia = require("ooprivilege").Utopia;

// Create our new utopia with 5 equal people, to start
var equalia = new Utopia(5, {
  intelligence: 95,
  averageEffortExerted: 10
});

// Demonstrate equality
equalia.people[0].intelligence; // => 95
equalia.people[0].averageEffortExerted; // => 10
equalia.people[3].intelligence; // => 95
equalia.people[3].averageEffortExerted; // => 10

// Everybody works hard
equalia.everybodyWorkHard();

// Everybody works hard again
equalia.everybodyWorkHard();

// Everybody works hard some more
equalia.everybodyWorkHard();

// Everybody continues to work really hard
equalia.everybodyWorkHard();

// Let's look at how much success everyone has had
equalia.progress();
```

`.progress()` prints out a table like this:

| Name | Success | Start |
| :---- | :----: | :----: |
| Person 2 | 120 | 80 |
| Person 4 | 99 | 59 |
| Person 5 | 64 | 24 |
| Person 1 | 52 | 12 |
| Person 3 | 46 | 6 |


What happened? I thought everyone in this utopia was the same level of intelligence, and they all worked with the same effort, and for the same amount of time? 

It turns out, how you start has a big effect on how you finish...

