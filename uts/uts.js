// "use strict";

function keluar() {
	var jml = document.getElementById("jml").value;

	for (var i = 1; i <= jml; i++) {
		document.write("<input type='text' placeholder='NIM' id='nim"+i+"''><br>");
		document.write("<input type='text' placeholder='Nama Lengkap' id='nama"+i+"''><br>");
		document.write("<input type='text' placeholder='Nilai Tugas 1' id='tugas1"+i+"''><br>");
		document.write("<input type='text' placeholder='Nilai Tugas 2' id='tugas2"+i+"''><br>");
		document.write("<input type='text' placeholder='Nilai UTS' id='uts"+i+"''><br>");
		document.write("<input type='text' placeholder='Nilai UAS' id='uas"+i+"''><br><hr>");
	}

	document.write("<input type='submit' name='submit' value='SUBMIT' onclick='uhuy("+jml+")'><br>");
}

function uhuy(yuhu) {
	document.write("<table>");
	for (var j = 1; j <= yuhu; j++) {
		var aha = [
			nim 	= document.getElementById("nim"+j).value,
			nama 	= document.getElementById("nama"+j).value,
			tugas1 	= document.getElementById("tugas1"+j).value,
			tugas2 	= document.getElementById("tugas2"+j).value,
			uts 	= document.getElementById("uts"+j).value,
			uas 	= document.getElementById("uas"+j).value
		];
		document.write(aha[0]);
		document.write("<br>");
		document.write(aha[1]);
		document.write("<br>");
		document.write(aha[2]);
		document.write("<br>");
		document.write(aha[3]);
		document.write("<br>");
		document.write(aha[4]);
		document.write("<br>");
		document.write(aha[5]);
		document.write("<hr>");
	}
	document.write("</table>");
}