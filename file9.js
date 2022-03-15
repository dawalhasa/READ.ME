// console.log("Undefined and Null")

// undefined example is below.
/* let myFirstName;
console.log(typeof myFirstName); */

/* let myFirstName;
console.log(typeof myFirstName);
// Here U have to keep in mind one thing that the const will not able to define the undefined using this variable statement.
myFirstName = "Dawa";
console.log(typeof myFirstName); */

/* let myFirstName;
console.log(typeof myFirstName);
myFirstName = "Dawa";
console.log(typeof myFirstName, myFirstName); */

// Now we try Null.

/* let myFirstName = null;
console.log(myFirstName);
myFirstName = "Dawa";
console.log(myFirstName); */

/* let myFirstName = null;
console.log(myFirstName);
myFirstName = "Dawa";
console.log(myFirstName, typeof myFirstName); */

// Now we will see one of problem here in javascript and people call it "Bug" means error in javascript.
// console.log(typeof null);


// In console you will see this as Object not as Null like undefined which we saw Before.
// So this is unavoidable mistake so far javascript made and they are few others too and we will see later.
// Still javascript can do nothing becuase there are already millions of codes has been written and if javascript try to correct this mistake they will have to go throught so difficulty Time.
// Therefore sometime all the mistake is not a mistake if you accept it and relize it even you can't change the pass got me.

// BigInt

// BigInt is one of javascript latest version updated by ecma generally we called Es5, Es6.
// So why this update is needed because U see in javascript Number value is valid to a certain limit till this update BigInt is introduced.
// But after this BigInt is updated now U can store unlimit numbers in javascript.
// See this.
// console.log(Number.MAX_SAFE_INTEGER);
// resul is (9007199254740991)
// this is Number limit before and now-
// let myNumber = BigInt(90071992547409912549753214568987);
// console.log(myNumber);
// but there is short cut also
// we see here
// let myNumber = 90071992547409912549753214568987n;
// console.log(myNumber);

// You can math with BigInt too but it should always with BigInt to BigInt, you can't mix with general Number to calculate with BigInt okay.

/* let myNumber = 90071992547409912549753214568987n;
let myNewNumber = 2336955478995786251256636568987556n;
console.log(myNumber + myNewNumber); */


// You can small Number in BigInt too.

// for example:
let myNumber = BigInt(12);
let myNewNumber = 30n;
console.log(myNumber + myNewNumber);
