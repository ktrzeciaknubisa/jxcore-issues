

process.on('exit', function(code) {
  console.log("exiting with code", code, "\n\n");
});

//Import Edge module
var wrapperDotNet = require('edge')

//Use InvokeBack .Net function
var aFunc = wrapperDotNet.func({
          assemblyFile: __dirname+"/dotNet/Edge.Tests.dll",
          typeName: 'Edge.Tests.Startup',
          methodName: 'MarshalInFromNet'
        });

//Create a callBack for the Async .NET method
var hellofunc = function(message){console.log(message); return;};

// Call method with callback
aFunc({hello:hellofunc}, function (error, message){
});

