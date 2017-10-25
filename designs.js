//  Draws grid selects color for Pixel Art project

function makeGrid() {

  let xSquares, ySquares, color;

  xSquares = $('#input_width').val();
  ySquares = $('#input_height').val();

// Sets initial value for color
  color = $('#colorPicker').val();

// Removes previous grid
  $('tr').remove();

// Draws the canvas
  let drawCanvas = function(ySquares, xSquares) {
    for(let i = 0; i < ySquares; i++) {
      $('#pixel_canvas').append('<tr />');
    }
    for(let j = 0; j < xSquares; j++) {
      $('tr').append('<td />')
    }
  };

  drawCanvas(ySquares, xSquares);

// Sets new value for color when the user changes the color picker
  $('#colorPicker').change( function() {
    color = $('#colorPicker').val();
  });

// Fills grid squares when the user clicks on them
  $('td').click(function() {
    $(this).css('background-color', color);
  });
};

// Calls the makeGrid function when the user clicks on the "submit" button
$('#submit').click(function() {
  makeGrid();
});
