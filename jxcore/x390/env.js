/**
 * Created by nubisa_krzs on 6/12/2015.
 */

var getSep = function() {

  if (!process.env.JX_ARG_SEP)
    return ","; // default is comma

  var sep = process.env.JX_ARG_SEP;
  if (process.platform === "win32") {
    // windows needs stripping quotes if used, e.g.: set JX_ARG_SEP="@"
    var first = sep.trim().slice(0,1);
    var last = sep.trim().slice(-1);
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      sep = sep.trim();
      sep = sep.slice(1, sep.length -1);
    } else {
      // if quotes are not used, unix would trim, so let's trim on win too, e.g.:
      // set JX_ARG_SEP=@   && echo ok
      // (there are spaces after @)
      sep = sep.trim();
    }
  }
  return sep;
};


//console.log("JX_ARG_SEP 1", ">" + getSep() + "<");
console.log("JX_ARG_SEP 2", ">" + jxcore.utils.argv.sep + "<");
console.log("JXTEST1", ">" + process.env.JXTEST1 + "<");
console.log("JXTEST2", ">" + process.env.JXTEST2 + "<");
console.log("JXTEST3", ">" + process.env.JXTEST3 + "<");

