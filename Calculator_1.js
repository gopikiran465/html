var d;
var b;
var a;
const getOperand = (val) => {
	a = document.getElementById("value1").value;
	b = document.getElementById("value2").value;
	var c = val;
	d = data(a, b, c);

}
const calculate = () => {
	if (d >= 0) {

		document.getElementById("total").innerText = d;
		document.getElementById("value1").value = 0;
		document.getElementById("value2").value = 0;
	} else {
		alert("select operation");
		document.getElementById("total").innerText = 0;
	}
}

const clear = () => {
	document.getElementById("value1").value = 0
	document.getElementById("value2").value = 0;
}

const data = (a, b, c) => {
	switch (c) {
		case "+":
			return Number(a) + Number(b);
		case "-":
			return Number(a) - (b);
		case "/":
			return Number(a) / (b);
		case "*":
			return Number(a) * (b);
		default:
			return 0;
	}
}