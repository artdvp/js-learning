/**
 * console.table() in JavaScript
 * from : https://alligator.io/js/console-table/
 */

let someArray = [
  "Blowin' in the Wind",
  "Like a Rolling Stone",
  "Knockin' On Heaven's Door"
];

console.table(someArray);
// show in browser

// Array of arrays:
let anotherArray = [["One", "Two"], ["Three", "Four"], ["Five", "Six"]];

console.table(anotherArray);

// object
function HitSingle(title, artist, year, album) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.album = album;
}

let favHit = new HitSingle("Like a Prayer", "Madonna", "1989", "Like a Prayer");

console.table(favHit);
