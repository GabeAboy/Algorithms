function catMouse(string,j) {
  var win = 'Caught!';
  var cat = string.indexOf('C');//cat position
  var stop = cat+j;
  var mouse = string.indexOf('m');
  var dog = string.indexOf('D');
  var direction;

  if(cat-mouse===1)return win;
  else if(dog===-1||cat===-1||mouse===-1) return 'boring without all three';

  if(cat<mouse) direction = cat++;
  else direction = cat--;

  for (; cat <= stop; cat++) {
    var checkMouse = string.indexOf(cat);
    if(string.charAt(checkMouse)==='.') ;
    else if(string.charAt(checkMouse)==='D') return 'Escaped!';
    else if(string.charAt(checkMouse)==='m')return win;
  }
}
console.log(catMouse('............C.............D..m...', 8));


/*
Description:

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'

function catMouse(x, j){

}


//Test Cases
catMouse('..D.....Cm', 13) // ==> "Caught!"
catMouse('............C.............D..m...', 8) // ==> "Escaped!"
catMouse('m.C...', 5) // ==> "boring without all three"*/a
