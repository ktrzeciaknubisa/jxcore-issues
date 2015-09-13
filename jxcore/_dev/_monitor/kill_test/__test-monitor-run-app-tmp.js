process.title = "jx_app"; require("http").createServer().listen(8587, "localhost");
setTimeout(process.exit, 100000); console.log("ok pid", process.pid);