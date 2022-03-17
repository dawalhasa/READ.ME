console.log("Chapter 17 we are going to study about `While Loop`")

// If you need to  print bunch of Number start from 0 to 9.

/* console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
 */

// but this same method you can assign very elegently with loop

// In coding language there is a word called dry that means don't repeat.


/* let i = 0;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i) */

// Now come to the while loop Style

/* let i = 0;
while (i <= 9) {
    console.log(i);
    i++
} */
/* let i = 0;  //1,2,3,4.
while (i <= 9) {
    console.log(i);
    i++
}
console.log("Hello!!!"); */

/* let i = 0;  //1,2,3,4.
while (i<= 9) {
    console.log(i);
    i ++ ;
}
console.log(`Current Value i is ${i}`);
console.log("Hello!!!"); */

// Now one another While Loop example:

/* let Num = 10;
let total = 0;
total = total + 1;
total = total + 2;
total = total + 3;
total = total + 4;
total = total + 5;
total = total + 6;
total = total + 7;
total = total + 8;
total = total + 9;
total = total + 10;
console.log(total); */

/* let Num = 10;
let total = 0;
total = 0 + 1;
total = 1 + 2;
total = 3 + 3;
total = 6 + 4;
total = 10 + 5;
total = 15 + 6;
total = 21 + 7;
total = 28 + 8;
total = 36 + 9;
total = 45 + 10;
console.log(total); */

let Num = 10;
/* let total = 0;
let i = 0;
while (i <= 10) {
    total = total + i;
    i++;
}
console.log(total); */

let total =  (Num*(Num+1))/2;
console.log(total);

