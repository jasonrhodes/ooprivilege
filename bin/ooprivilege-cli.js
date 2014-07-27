#!/usr/bin/env node

var prompt = require("prompt");
var Utopia = require("../ooprivilege").Utopia;

prompt.message = "ooprivilege".grey;
prompt.delimiter = " > ";

prompt.start();

prompt.get({
  properties: {
    n: {
      description: "Let's build a new utopia--how many people should we create?".cyan
    },
    intelligence: {
      description: "And how intelligent should everyone be? (1-10)".cyan
    },
    effort: {
      description: "And on average, how hard should these people be willing to work? (1-10)".cyan
    },
    work: {
      description: "And finally, how many times should they work hard? (1-10)".cyan
    }
  }
}, function (err, result) {

  var utopia = new Utopia(result.n, {
    intelligence: result.intelligence,
    averageEffortExerted: result.effort
  });

  console.log("");
  console.log(result.n + " people created in our new utopia ... ");
  console.log("");
  console.log("---");
  console.log("");

  for (var i = 0; i < result.work; i++) {
    utopia.everybodyWorkHard();
    console.log("Everybody worked hard, time number " + (i + 1));
  }

  console.log("");
  console.log("---");
  console.log("");
  console.log("Final success log:");
  console.log("");
  utopia.logSuccess();
  console.log("");

});
