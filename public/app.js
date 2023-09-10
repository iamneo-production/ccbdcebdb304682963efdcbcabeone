var x = true;
var o = false;

function myFunction(btnid) {
  var button = document.getElementById(btnid);

  if (x) {
    button.value = "X";
    button.disabled = true;
    conditionCheck("X");
    x = false;
    o = true;
  } else {
    button.value = "O";
    button.disabled = true;
    conditionCheck("O");
    x = true;
    o = false;
  }
}

function conditionCheck(val) {
  var r00 = document.getElementById("r00");
  var r01 = document.getElementById("r01");
  var r02 = document.getElementById("r02");
  var r10 = document.getElementById("r10");
  var r11 = document.getElementById("r11");
  var r12 = document.getElementById("r12");
  var r20 = document.getElementById("r20");
  var r21 = document.getElementById("r21");
  var r22 = document.getElementById("r22");
  var buttons = [
    [r00, r01, r02],
    [r10, r11, r12],
    [r20, r21, r22],
    [r00, r10, r20],
    [r01, r11, r21],
    [r02, r12, r22],
    [r00, r11, r22],
    [r02, r11, r20],
  ];

  for (var i = 0; i < buttons.length; i++) {
    var [btn1, btn2, btn3] = buttons[i];
    if (btn1.value === btn2.value && btn2.value === btn3.value) {
      if (btn1.value === "X") {
        updateParagraph("N");
      } else if (btn1.value === "O") {
        updateParagraph("M");
      }
      return;
    } else {
      updateParagraph(val);
    }
  }

  // Check for a draw
  var draw = true;
  for (var i = 0; i < buttons.length; i++) {
    for (var j = 0; j < buttons[i].length; j++) {
      if (buttons[i][j].value === "") {
        draw = false;
        break;
      }
    }
  }

  if (draw) {
    updateParagraph("D");
  }
}

function updateParagraph(element) {
  var el = element;
  var paragraph = document.getElementById("p1");
  var reset = document.getElementById("reset");

  if (el === "X") {
    paragraph.textContent = "Player O's turn";
  } else if (el === "O") {
    paragraph.textContent = "Player X's turn";
  } else if (el === "N") {
    paragraph.textContent = "Player X won";
    reset.removeAttribute("disabled");
  } else if (el === "M") {
    paragraph.textContent = "Player O won";
    reset.removeAttribute("disabled");
  } else {
    paragraph.textContent = "Game drawn";
    reset.removeAttribute("disabled");
  }
}

function reloads() {
  location.reload();
}
