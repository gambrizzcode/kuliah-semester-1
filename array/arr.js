"use strict";

// var a = new Array();
// a[0]  = new Array(3);
// a[1]  = new Array(3);
// a[2]  = new Array(3);

var a = [
			['toto','1','haha'],
			['titi','2','hihi'],
			['tata','3','hoho']
		]

// a[0][0] = 'toto';
// a[0][1] = '081230856890';
// a[0][2] = 'jl pb sudirman';

// a[1][0] = 'titi';
// a[1][1] = '08123000000';
// a[1][2] = 'jl ahmad yani';

// document.write(a[1][0] + "<br>");
// document.write(a[1][1] + "<br>");
// document.write(a[1][2] + "<br>");

for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		document.write(a[j][i]);
		document.write(',');
	}
	document.write('<br>');
}