var Person = function (name, options) {
  options = options || {};
  this.name = name;
  this.intelligence = options.intelligence || 100;
  this.averageEffortExerted = options.averageEffortExerted || 10;
  this.start = Math.floor(Math.random() * 100);
  this.success = this.start;
};

Person.prototype.workHard = function () {
  this.success += this.averageEffortExerted;
};

Person.prototype.currentSuccess = function () {
  return this.success * this.intelligence;
}

var Utopia = function (n, options) {
  this.people = [];
  if (n) { this.create(n); }
};

Utopia.prototype.create = function (n, options) {
  for (var i = 0; i < n; i++) {
    this.people.push(new Person("Person " + (i + 1), options));
  }
};

Utopia.prototype.everybodyWorkHard = function () {
  this.people.forEach(function (person) {
    person.workHard();
  });
};

Utopia.prototype.logSuccess = function () {
  this.people.sort(function (a, b) {
    return b.success - a.success;
  });
  console.log("Name\t\t| Success\t| Start");
  this.people.forEach(function (person) {
    console.log(person.name + "\t| " + person.currentSuccess() + "\t\t| " + person.start);
  });
};

module.exports.Person = Person;
module.exports.Utopia = Utopia;
