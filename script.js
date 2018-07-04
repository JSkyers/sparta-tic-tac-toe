$(document).ready(function() {

var playerTurn = "x";
var $tile = $("td");
var tiles = [];

$("td").click(function(){
  if (playerTurn == "x") {
    $(this).addClass("X").html("X")
    playerTurn = "o"
    $("td").each(tileCover);
    }
  else{
    $(this).addClass("O").html("O")
    playerTurn = "x"
    $("td").each(tileCover);
  }
})
  function tileCover( index, space){
    tiles[index] = $(this).html();
    winCondition()
  }

  function winCondition(){
    if (tiles[0] == "X" && tiles[1] == "X" && tiles[2] == "X" || tiles[0] == "O" && tiles[1] == "O" && tiles[2] == "O") {
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[3] == "X" && tiles[4] == "X" && tiles[5] == "X" || tiles[3] == "O" && tiles[4] == "O" && tiles[5] == "O" ) {
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[6] == "X" && tiles[7] == "X" && tiles[8] == "X" || tiles[6] == "O" && tiles[7] == "O" && tiles[8] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[2] == "X" && tiles[5] == "X" && tiles[8] == "X" || tiles[2] == "O" && tiles[5] == "O" && tiles[8] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[1] == "X" && tiles[4] == "X" && tiles[7] == "X" || tiles[1] == "O" && tiles[4] == "O" && tiles[7] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[0] == "X" && tiles[3] == "X" && tiles[6] == "X" || tiles[0] == "O" && tiles[3] == "O" && tiles[6] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[0] == "X" && tiles[4] == "X" && tiles[8] == "X" || tiles[0] == "O" && tiles[4] == "O" && tiles[8] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }else if (tiles[2] == "X" && tiles[4] == "X" && tiles[6] == "X" || tiles[2] == "O" && tiles[4] == "O" && tiles[6] == "O" ){
      alert("WINNER WINNER CHICKEN DINNER")
    }
  }



$("#reset").click(function(){
    $("td").removeClass("X").html("");
    $("td").removeClass("O").html("");
    $("h2").html("It is X's playerTurn");
  });

  

});
