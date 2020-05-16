console.log(__filename);
console.log(__dirname);

function log (message) {
    console.log(message);
}

//make it public
module.exports.log = log;   

