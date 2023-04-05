//your JS code here. If required.
let arr = [1,2,3,4];

	let odd = arr.filter((value) => {
		return value%2==1;
	});
	let even = arr.filter((value) => {
		return value%2==0;
	});
    let multi = even.map((value) => {
		return value*2;
	});

	let promise1 = new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(odd);
		},1000);
	});
	let promise2 = new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(multi);
		},2000);
	});

let output =document.getElementById('output');

promise1.then((data) => {
	output.innerText = data;
console.log(data);
});

promise2.then((data) => {
	let result = output.innerText;
	output.innerText = result + data;
});