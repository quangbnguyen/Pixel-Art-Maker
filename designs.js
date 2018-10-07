// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  const height = $('#inputHeight').val();
  const width = $('#inputWeight').val();
  
  $('body').append('<table class="table"></table>');
  //$('<table id="pixelCanvas"></table>').insertAfter($('#designCanvas');
  
  for (let i = 0; i < height; i++) {
    $('table').append('<tr></tr>');
  };
  
  for (let j = 0; j < width; j++) {
    $('tr').append('<td class="cell"></td>');
  };
  
}

$('#submitButton').on('click', function(evt) {
  evt.preventDefault();
  $('table').remove();
  makeGrid();
  attachClickHandler();
});

function attachClickHandler() {
  $('table').on('click', '.cell', function(evt) {
    let color = $('#colorPicker').val();
    console.log("haha");
    $(evt.target).css('background', color);
  });  
}
