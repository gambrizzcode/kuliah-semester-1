<?php
//bubble sort

$a = array(4,3,1,2,6,5);
$n = count($a);

// for ($i=0; $i < $n-1; $i++) { 
// 	// echo $i;
// 	for ($j=$i+1; $j < $n ; $j++) { 
// 		// echo $j;
// 		if ($a[$i] > $a[$j]) {
// 			$temp    = $a[$i];
// 			$a[$i] = $a[$j];
// 			$a[$j]   = $temp; 
// 		}
// 	}
// }

// print_r($a);

// $i = -1;
// while ($i < $n-2) {
// 	$i++;
// 	$j=$i;
// 	while ($j < $n-1) {
// 		$j++;
// 		if ($a[$i] > $a[$j]) {
// 			$temp    = $a[$i];
// 			$a[$i] = $a[$j];
// 			$a[$j]   = $temp; 
// 		}
// 		// echo $j;
// 	}
// 	// echo $i;
// }

// print_r($a);

// $i = -1;
// do {
// 	$i++;
// 	$j=$i;
// 	do {
// 		$j++;
// 		if ($a[$i] > $a[$j]) {
// 			$temp    = $a[$i];
// 			$a[$i] = $a[$j];
// 			$a[$j]   = $temp; 
// 		}
// 		// echo $j;
// 	} while ($j < $n-1);
// 	// echo $i;
// } while ($i < $n-2);

// print_r($a);

//selection sort
/*
$a = array(4,3,1,2,6,5);
$n = count($a);

for ($i=0; $i < $n-1; $i++) { 
	$min = $i;
	for ($j=$i+1; $j < $n; $j++) { 
		if ($a[$j] < $a[$min]) {
			$min = $j;
		}
	}
	$temp    = $a[$i];
	$a[$i]   = $a[$min];
	$a[$min] = $temp;
}

print_r($a);
*/

//insertion sort
/*
$a = array(4,3,1,2,6,5);
$n = count($a);

for ($i=1; $i < $n; $i++) { 
	$key = $a[$i];
	while ($i > 0 && $a[$i-1] > $key) {
		$a[$i] = $a[$i-1];
		$i = $i-1;
	}
	$a[$i] = $key;
}

print_r($a);
*/
?>