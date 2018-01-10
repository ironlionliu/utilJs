var Utils = require("./Utils.js");
var obj = require("./testobj.js");




var value = {
	parent:"parentover",
	childobj:{
		test: [
		{hi:"over1"},
		{hi2:"over2"},
		{hi3:"over3"},
		]
	},
	arr:[7,8,[9,10],9,4,5,6,7],
	pipilu: "pipilu"
}

console.log(obj);
Utils.deepOverwrite(obj,value);
console.log(obj);