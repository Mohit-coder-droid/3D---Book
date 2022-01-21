var differencex =0, differencey=0

// Creating a function that will give us the position of the mouse cursor
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  return [x,y]
}

// Creating a function that will give us the cursor distance
function cursor_distane(xm, xn, ym, yn){

  var before_pos = [differencex, differencey];
  console.log(before_pos[0], before_pos[1])

  differencex = ((xn-xm) + differencex)/2;
  differencey = ((yn-ym) + differencey)/2;

  // Now we will give it transform as we move the mouse

  var shape = document.getElementById('shape');

  var changex = 'rotateY('+ differencex +'deg)';
  var changey = 'rotateX('+ differencey +'deg)';

  shape.style.transform = changex + ' ' + changey;
}

var getmousePos = function (e) {
  var after = getCursorPosition(canvas, e);

  var afterx = after[0]
  var aftery = after[1]

  // Now we want the distance between the position we had clicked the mouse and now when we are moving the mouse

  cursor_distane(beforex, afterx, beforey, aftery)

}

const canvas = document.getElementById('wrapper');
canvas.addEventListener('mousedown' ,(e) => {
  var before = getCursorPosition(canvas, e);

  beforex = before[0]
  beforey = before[1]

  canvas.addEventListener('mousemove', getmousePos);
});

canvas.addEventListener('mouseup', (e)=>{
  canvas.removeEventListener('mousemove', getmousePos)
});

