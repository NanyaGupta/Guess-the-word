player1Name=localStorage.getItem("Player 1 Name");
player2Name=localStorage.getItem("Player 2 Name");
var player1Score=0;
var player2Score=0;
document.getElementById("player1Name").innerHTML= player1Name+" : ";
document.getElementById("player2Name").innerHTML= player2Name+" : ";
document.getElementById("player1Score").innerHTML= player1Score;
document.getElementById("player2Score").innerHTML= player2Score;
document.getElementById("playerQuestion").innerHTML= "Question turn - "+ player1Name;
document.getElementById("playerAnswer").innerHTML= "Answer turn - "+ player2Name;

function send(){
    var getWord=document.getElementById("word").value;
    var lowercaseWord=getWord.toLowerCase();
    console.log("Word in lowercase format = "+ lowercaseWord);
   //charAt()code starts from here//
   var charAt1=lowercaseWord.charAt(1);
   console.log(charAt1);
   var lengthDivide2=Math.floor(lowercaseWord.length/2);
   var charAt2=lowercaseWord.charAt(lengthDivide2);
   console.log(charAt2);
   var lengthMinus1=lowercaseWord.length-1;
   var charAt3=lowercaseWord.charAt(lengthMinus1);
   //charAt() code ends//
   //replace code starts//
   var removeCharAt1=lowercaseWord.replace(charAt1,"_");
   var removeCharAt2=removeCharAt1.replace(charAt2,"_");
   var removeCharAt3=removeCharAt2.replace(charAt3,"_");
   console.log(removeCharAt3);
   var questionWord="<h4 id='wordDisplay'> Q. " + removeCharAt3 + "</h4>";
   var inputBox="<br>Answer : <input type='text' id='input_check_box'>"; 
   var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = questionWord + inputBox + checkButton ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    //replace code ends//
    
}

var questionTurn="player1";
var answerTurn="player2";

function check(){
  var getAnswer= document.getElementById("input_check_box").value;
  var answer=getAnswer.toLowerCase();
  console.log("answer in lowercase is- "+ answer);
  if (answer==lowercaseWord){
      if(answerTurn=="player1"){
      player1Score=player1Score+1;
      document.getElementById("player1Score").innerHTML=player1Score;
      }
      else{
        player2Score=player2Score+1;
      document.getElementById("player2Score").innerHTML=player2Score;  
      } 
}
if(answerTurn=="player1"){
    answerTurn="player2"
    document.getElementById("playerAnswer").innerHTML="Answer Turn= "+player2Name;
}
else{
    answerTurn="player1"
    document.getElementById("playerAnswer").innerHTML="Answer Turn= "+player1Name;
}
if(questionTurn=="player1"){
   questionTurn="player2"
    document.getElementById("playerQuestion").innerHTML="Question Turn= "+player2Name;
}
else{
    questionTurn="player1"
    document.getElementById("playerQuestion").innerHTML="Question Turn= "+player1Name;
}
document.getElementById("output").innerHTML="";
}