var Utils = require("./Utils.js");
var objs = require("./testobj.js");


var obj = objs.origin;
var value = objs.value;


console.log(obj);
// Utils.deepReverse(obj,value);
Utils.deepOverwrite(obj,value);
console.log(obj);
