var dictionary = require("./reader").dictionary;
var stdin = require("process").stdin;
stdin.setEncoding("utf8");


function getRandom(max){
    return Math.floor(Math.random() * max);
}

function getNewWord(){
    var posInDictionary;
    var posInBox;
    var size = dictionary.length;
    do{
        posInDictionary = getRandom(size);
    }while(dictionary[posInDictionary].used);
    
    var currWordsBox = dictionary[posInDictionary];
    posInBox = getRandom(currWordsBox.italianWords.length);
    var toAskWord = currWordsBox.italianWords[posInBox];
    return [currWordsBox, toAskWord];
}

exports.ask = function(){
    var score = 0;
    var arr = getNewWord();
    var currWordsBox = arr[0];
    var toAskWord = arr[1];
    console.log(toAskWord);
    
    stdin.on("data", function(answer){
        answer = answer.trim();
        var response = "";
        var linker = ", or ";
        currWordsBox.englishWords.forEach(function(word){
            response += (word + linker);
        });
        response = response.substring(0, response.length - linker.length);

        if(currWordsBox.englishWords.indexOf(answer) > - 1){
            console.log("Yes, you got it! All the possible translation are: ", response);
            score++;
        }
        else{
            console.log("No, the right traslation is", response);
        }
        arr = getNewWord();
        currWordsBox = arr[0];
        toAskWord = arr[1];
        console.log(toAskWord);
    });

    stdin.on("end", function(){
        console.log(score);
    });
    //console.log(score);
}
