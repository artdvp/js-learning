/**
 * Using DOMParser to Parse HTML Strings
 * from : https://alligator.io/js/domparser/
 */
let parser = new DOMParser();
let parsedHtml = parser.parseFromString(htmlContent, "text/html");

let firstImg = parsedHtml.images[0].src;

let liElements = parsedHtml.getElementsByTagName("ul")[1].children;

let active = parsedHtml.getElementsByClassName("active").innerHTML;

let rawLiElements = parsedHtml.getElementsByTagName("ul")[1].children;
let liElements = [];

for (let i = 0; i < rawLiElements.length; i++) {
  liElements.push(rawLiElements[i].innerHTML);
}
