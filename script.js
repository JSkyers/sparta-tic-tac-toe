$(function(){

  var playerTurn = 1;
  var $grid = $("td");
  $grid.click(addXOrO);

  function addXOrO() {
    if(playerTurn == 1 && $(this).html() == "" ) {
      $(this).html("X");
      playerTurn = 2;
      checkForWinner($(this).html());
    } else if (playerTurn == 2 && $(this).html() == "") {
      $(this).html("O");
      playerTurn = 1;
      checkForWinner($(this).html());
    }
  }
  function checkForWinner(symbol) {
    if($($grid[0]).html() == symbol && $($grid[1]).html() == symbol && $($grid[2]).html() == symbol) {
      alert(symbol + " has won!");
    } else if($($grid[3]).html() == symbol && $($grid[4]).html() == symbol && $($grid[5]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[6]).html() == symbol && $($grid[7]).html() == symbol && $($grid[8]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[0]).html() == symbol && $($grid[3]).html() == symbol && $($grid[6]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[1]).html() == symbol && $($grid[4]).html() == symbol && $($grid[7]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[2]).html() == symbol && $($grid[5]).html() == symbol && $($grid[8]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[0]).html() == symbol && $($grid[4]).html() == symbol && $($grid[8]).html() == symbol) {
        alert(symbol + " has won!");
    } else if($($grid[2]).html() == symbol && $($grid[4]).html() == symbol && $($grid[6]).html() == symbol) {
        alert(symbol + " has won!");
    }
  }

  $("#reset").click(function(){
      $("td").removeClass("X").html("");
      $("td").removeClass("O").html("");
      $("h2").html("It is X's playerTurn");
      playerTurn = 1;
    });
});
