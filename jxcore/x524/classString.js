// Copyright & License details are available under JXCORE_LICENSE file


function classString(obj) {
  return {}.toString.call(obj);
}

//var x = typeof process !== "undefined" &&
//classString(process).toLowerCase() === "[object process]";

//console.log(classString(process));
//console.log(classString(process).toLowerCase());


console.log({}.toString.call(process));