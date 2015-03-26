var fs = require("fs");

function wordsBox(ita, eng){
    this.used = false;
    this.englishWords = eng;
    this.italianWords = ita;
}

var dictionary = exports.dictionary = [];

exports.read = function(cb){
    fs.readFile("input.txt", "utf8", function(err, data){
        var lines = data.split('\n');

        lines = lines.filter(function(line){
            return line.replace(/\s/g,'').length > 0;
        });

        lines.forEach(function(line){
            var parts = line.split(';');
            var italianPart = parts[0];
            var englishPart = parts[1];
            var italianWords = italianPart.split(',');
            var englishWords = englishPart.split(',');
            var currWordsBox = new wordsBox(italianWords, englishWords);
            dictionary.push(currWordsBox);
        });

        cb();
    });
}
