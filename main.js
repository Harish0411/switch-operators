
let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
let o = prompt("enter operator");

switch(o){
     case "+":
	     console.log(a+b);
		 break;
	case "-":
	     console.log(a-b);
		 break;
	case "*":
	     console.log(a*b);
		 break;
	 case "/":
	     console.log(a/b);
		 break;
	 case "%":
	     console.log(a%b);
		 break;
	 case "**":
	     console.log(a**b);
		 break;
	 default:
	     console.log("error");
}
