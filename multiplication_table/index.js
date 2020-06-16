var str = "";
for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= 9; j++) {
		if (j > i) {
			continue;
		}
		str += i + "*" + j + "=" + (i*j) + "  ";
	}
	str += "\n";
}
console.log(str);