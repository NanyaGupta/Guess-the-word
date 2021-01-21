function addUser(){
    var player1Name=document.getElementById("player1NameInput").value;
    var player2Name=document.getElementById("player2NameInput").value;
    localStorage.setItem("Player 1 Name", player1Name);
    localStorage.setItem("Player 2 Name", player2Name);
    window.location ="game_page.html";
}

