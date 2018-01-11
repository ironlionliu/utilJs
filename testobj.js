origin = 
{
	parent:"parent",
	childobj:{
		test: [
		{hi:"hi1"},
		{hi2:"hi2"},
		{hi3:"hi3"},
		]
	},
	arr:[1,2,[3,4,0],[5,6]],
	gungun:"滚滚长江东逝水",
	lang:"浪花淘尽英雄"
}

value = 
{
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



var objs = {};
objs.origin = origin;
objs.value = value;
module.exports = objs;
// var valueObj = {
// 	parent:"parentover",
// 	childobj:{
// 		test: [
// 		{hi:"over1"},
// 		{hi2:"over2"},
// 		{hi3:"over3"},
// 		]
// 	},
// 	arr:[7,8,[9,10],9,4,5,6,7]
// }