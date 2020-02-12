/*Chris Schultz
schultz_a09b.js
Info 2124 WW
Thoendel
02-12-2020*/

//display the count of <p> tags
console.log(`The total number of <p> tags in this document is ${ document.getElementsByTagName("p").length }.`);

//display the count of <div> tags
console.log(`The total number of <div> tags in this document is ${ document.getElementsByTagName("div").length }.`);

//display the count of paragraphed class
//PLEASE NOTE: There are several elements in the html file that APPEAR to have class="paragraph" but it actually says "pragraph" (missing the first a) 
//I can't tell if that's a typo or not so I left it as is
//as a result, this count might be lower than you 'expect', but the code is functioning correctly
console.log(`The total number of "paragraph" classed elements in this document is ${ document.getElementsByClassName("paragraph").length }.`);

//display the count of block-text class
console.log(`The total number of "block-text" classed elements in this document is ${ document.getElementsByClassName("block-text").length }.`);

//display the element with the id value of b001
console.log("Here is the element with an ID of b001:");
console.log(document.getElementById("b001"));

//end program