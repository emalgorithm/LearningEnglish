# LearningEnglish
This project is realized using Node.js, a platform for server-side JavaScript.
As a consequence, you need to have Node.js installed on your PC to run it.

  The aim of this project is to help people remember all those words and expressions that are really difficult to grasp just by reading them once. I created it because I needed a better way to learn English. Now, everytime I read a word I don't know, I put it in my program with its traduction. In this way, I'll be asked this word again and again and it will stick in my memory.

The program works as following:
It reads the input from a file called "input.txt" that need to be in the same folder as the other files and that should be formatted in this way:
        
        Language1Word1,Language1Word2,...,Language1WordN;Language2Word1,Language2Word2,...,Language2WordN
        Language1Word1,Language1Word2,...,Language1WordN;Language2Word1,Language2Word2,...,Language2WordN
        //and so on....every line should be as those above
        
    Example:
        ciao;hello
        bello,carino;beautiful,nice,cute
  
Here, all Language1Words are all synonyms and are written in your native language, whereas all the Language2Words are the respective traductions(usually in English, but actually it need to be just the language you want to learn). It means that every word after the semicolumn is a valid traduction for every word before the semicolumn. Indeed, the program selects a line from the input test randomly, then selects a native language word randomly and show it to you. Then, you should type in one of the possible traduction for that word. Obviously, there can be as many words as you want both at the left and at the right of the semicolumn, and their number can also be different.
