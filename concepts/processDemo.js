//argv
console.log(process.argv);
console.log(process.argv[3]);

//run: node processDemo.js import -s
//import -s are arguments passed to the script.

//process.env -- returns the system variables
console.log(process.env.LOGNAME);

//pid
console.log(process.pid);

//cwd
console.log(process.cwd());

//title
console.log("-->", process.title);

//memoryUsage()
console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});
//exit()
process.exit(0);

console.log("Hello from after exit -- this line will not be run");
