// module.exports = deepVisit;


var deepOverwrite = function(objOrgin,objValue){
	let type = Object.prototype.toString.call(objValue);
	if(/Array/.test(type)){
		objValue.forEach(function(v,i,arr){
			try{
				let type = Object.prototype.toString.call(v);
				if(!/Array|Object/.test(type)){
					objOrgin[i] = v;
				}
				deepOverwrite(objOrgin[i],v);
			}catch(error){
				console.log(error);
			}
		});
	}else if(/Object/.test(type)){
		for(let key in objValue){
			try{
				let type = Object.prototype.toString.call(objValue[key]);
				if(!/Array|Object/.test(type)){
					objOrgin[key] = objValue[key];
				}
				deepOverwrite(objOrgin[key],objValue[key]);
			}catch(error){
				console.log(error);
			}
		}
	}else{
		console.log("到底了");
		//console.log("not an object or array");
	}
}

/*深度优先遍历对象树*/
var deepVisit = function(obj){
	let type = Object.prototype.toString.call(obj);
	if(/Array/.test(type)){
		obj.forEach(function(v,i,arr){
			console.log("数组:" + i);
			deepVisit(v);
		});
	}else if(/Object/.test(type)){
		for(let key in obj){
			console.log("对象:" + key);
			deepVisit(obj[key]);
		}

	}else{
		console.log("值:" + obj);
	}	
}



Utils = {}
Utils.deepVisit = deepVisit;
Utils.deepOverwrite = deepOverwrite;

module.exports = Utils;