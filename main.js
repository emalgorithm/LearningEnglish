var reader = require('./reader');
var asker = require('./asker');
var stdin = require('process').stdin;

reader.read(function(){
    asker.ask();
});
