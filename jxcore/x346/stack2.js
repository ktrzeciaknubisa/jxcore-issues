var called = false;


function extend(sup,base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,"constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target,obj,args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var descriptor = Object.getOwnPropertyDescriptor(
  Error.prototype,"constructor"
);

//console.log(descriptor);

var s = new Error();
var s = Error;
//s = s.prototype;
for(var o in s)
  console.log(o, "=", s[o]);