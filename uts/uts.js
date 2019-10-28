// "use strict";

function keluar() {
	var jml = document.getElementById("jml").value;

	document.write("<h2 align='center'>Pengisian Nilai Mahasiswa </h2><hr>");

	for (var i = 1; i <= jml; i++) {
		document.write("<center><div style='margin: 10px; padding: 10px; width: 500px;'>");
		document.write("<h3>Mahasiswa "+i+"</h3>");
		document.write("<table>");
		document.write("<tr><td>NIM</td>");
		document.write("<td> : <input type='text' style='width:300px' id='nim"+i+"'></td></tr>");
		document.write("<tr><td>Nama Lengkap</td>");
		document.write("<td> : <input type='text' style='width:300px' id='nama"+i+"'></td></tr>");
		document.write("<tr><td>Nilai Tugas 1</td>");
		document.write("<td> : <input type='number' style='width:300px' id='tugas1"+i+"'></td></tr>");
		document.write("<tr><td>Nilai Tugas 2</td>");
		document.write("<td> : <input type='number' style='width:300px' id='tugas2"+i+"'></td></tr>");
		document.write("<tr><td>Nilai UTS</td>");
		document.write("<td> : <input type='number' style='width:300px' id='uts"+i+"'></td></tr>");
		document.write("<tr><td>Nilai UAS</td>");
		document.write("<td> : <input type='number' style='width:300px' id='uas"+i+"'><br></td></tr>");
		document.write("</table>");
		document.write("</div></center>");
	}

	document.write("<hr><center><div style='width:450px; text-align: center'>");
	document.write("<input type='submit' style='width: 250px; height: 35px; font-size: 20px; margin-left:25px; margin-top: 10px' name='submit' value='SUBMIT' onclick='uhuy("+jml+")'>");
	document.write("</div></center><br>");
}

function uhuy(yuhu) {
	document.write("<br><center>");
	document.write("<div style='width:70%;'>");
	document.write("<table width='100%' border='1' style='border-collapse:collapse'>");
	document.write("<tr height='30px'><th>No</th>");
	document.write("<th>NIM</th>");
	document.write("<th>Nama Lengkap</th>");
	document.write("<th>Nilai Tugas 1</th>");
	document.write("<th>Nilai Tugas 2</th>");
	document.write("<th>Nilai UTS</th>");
	document.write("<th>Nilai UAS</th>");
	document.write("<th>Nilai Rata-rata</th>");
	document.write("<th>Nilai Huruf</th>");
	document.write("<th>Status</th></tr>");
	for (var j = 1; j <= yuhu; j++) {
		var aha = [
			nim 	= document.getElementById("nim"+j).value,
			nama 	= document.getElementById("nama"+j).value,
			tugas1 	= document.getElementById("tugas1"+j).value,
			tugas2 	= document.getElementById("tugas2"+j).value,
			uts 	= document.getElementById("uts"+j).value,
			uas 	= document.getElementById("uas"+j).value
		];
		var tgs1 = eval(aha[2]);
		var tgs2 = eval(aha[3]);
		var utss = eval(aha[4]);
		var uass = eval(aha[5]);

		var rata = (tgs1+tgs2+utss+uass)/4;
		var huruf, status;
		if (rata >= 85 && rata <= 100) {
			huruf = "A"; status = "LULUS";
		}else if (rata >= 70 && rata <= 84) {
			huruf = "B"; status = "LULUS";
		}else if (rata >= 60 && rata <= 69) {
			huruf = "C"; status = "LULUS";
		}else if (rata >= 50 && rata <= 59) {
			huruf = "D"; status = "TIDAK LULUS";
		}else{
			huruf = "E"; status = "TIDAK LULUS";
		}

		document.write("<tr height='30px' style='padding:5px; margin:5px'><td>"+j+"</td>");
		document.write("<td>"+aha[0]+"</td>");
		document.write("<td>"+aha[1]+"</td>");
		document.write("<td>"+aha[2]+"</td>");
		document.write("<td>"+aha[3]+"</td>");
		document.write("<td>"+aha[4]+"</td>");
		document.write("<td>"+aha[5]+"</td>");
		document.write("<td>"+rata+"</td>");
		document.write("<td>"+huruf+"</td>");
		document.write("<td>"+status+"</td></tr>");
	}
	document.write("</table></center><br><hr>");
}