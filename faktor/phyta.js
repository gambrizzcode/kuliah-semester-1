"use strict";

function phyta(a,b) {
	return Math.sqrt(a*a+b*b);
}

var a = prompt("Alas Segitiga : ");
var b = prompt("Tinggi Segitiga : ");
var c = phyta(a,b);

document.write("sisi a : " + a + ", sisi b : " + b + ", sisi c : " + c);