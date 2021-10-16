const age = 127;
const isFemale = false;
const driverStatus = "drunk";

if (age >= 18) {
    console.log("Person is of age, entry permitted, have fun!");
} else {
        console.log("NO!");
}

if (isFemale) {
    console.log("Have fun, but no dancing on the bar!")
} else console.log("Men are not allowed, that wig is fooling no-one!")

if (driverStatus == "bob") {
    console.log("Thanks for coming, drive safe");
} else {
    console.log("You wil not drive, you stupid " + driverStatus + "!")
}