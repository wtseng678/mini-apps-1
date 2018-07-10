
var boxes = []; 

function init() {
  var board = document.createElement('table');
  board.setAttribute('border', 1);
  board.setAttribute('cellspacing', 0);

  var identifier = 1;
  for (var i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);
    for (var j = 0; j < 3; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('height', 120);
      cell.setAttribute('width', 120);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add('col' + j, 'row' + i);
      if (i == j) {
        cell.classList.add('diagonal0');
      }
      if (j == 2 - i) {
        cell.classList.add('diagonal1');
      }
      cell.identifier = identifier;
      cell.addEventListener('click', set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }
  }

  document.getElementById('tictactoe').appendChild(board);
  restart();
}

function restart() {
  score = {
    'X': 0,
    'O': 0
  };
  moves = 0;
  turn = 'X';
  boxes.forEach(function (square) {
    square.innerHTML = '';
  });
}


function gameStatus(clicked) {
  var memberOf = clicked.className.split(/\s+/);
  for (var i = 0; i < memberOf.length; i++) {
    if (contains('#tictactoe ' + '.' + memberOf[i], turn).length == 3) {
      return true;
    }
  }
  return false;
}

function contains(selector, text) {
  return [].filter.call(document.querySelectorAll(selector), function (element) {
    return RegExp(text).test(element.textContent);
  });
}

function set() {
  if (this.innerHTML !== '') {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (gameStatus(this)) {
    alert('Winner: Player ' + turn);
    restart();
  } else if (moves === 9) {
    alert('Draw');
    restart();
  } else {
    turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').textContent = 'Player ' + turn;
  }
}

init();