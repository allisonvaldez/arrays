const people = ["Greg", " Mary", " Devon", " James"];

console.log(`starting string for tracking: ${people}`);

// Question 1:
console.log(people.shift());
console.log(`1. people.shift(): ${people}`);

// Question 2:
console.log(people.pop());
console.log(`2. people.pop(): ${people}`);

// Question 3:
console.log(people.unshift(" Matt"));
console.log(`3. people.unshift("Matt")): ${people}`);

// Question 4:
console.log(people.push(" Allison"));
console.log(`4. people.push("Allison")): ${people}`);

// Question 5:
console.log(`5. people.slice(-2)): ${people.slice(-2)}`);

// Question 6:
console.log(`6. people.indexof(" Mary")): ${people.indexOf(" Mary")}`);

// Question 7:
console.log(`7. people.indexof("Foo")): ${people.indexOf("Foo")}`);

// Question 8:
people[0] = " Greg";
people[3] = " James";
console.log(`8. people[0] = " Greg" and people[3] = " James": ${people}`);
people.splice(2, 1, " Elizabeth", " Artie");
console.log(`people.splice(2, 1, " Elizabeth", " Artie"); ${people}`);

// Question 8:
const withBob = people.concat(" Bob");
console.log(`8. const withBob = people.concat(" Bob"): ${withBob}`)