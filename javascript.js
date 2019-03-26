var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Guten Abend! Schauen Sie sich um!';
} else if (hourNow > 12) {
    greeting = 'Guten Tag! Schauen Sie sich um!';
} else if (hourNow > 0) {
    greeting = 'Guten Morgen! Schauen Sie sich um!';
} else {
    greeting = 'Willkommen! Schauen Sie sich um!';
}

document.write('<h1 class="gruss">' + greeting + '</h1>')