//javascript function tha reverse numbers
function reverse_a_number(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
console.log("reverse number is=",Number(reverse_a_number(32243)));
