$(document).ready(function(){
$('body').append('<div class= "1"></div>');
$('.1').css({'background-color': 'red', 'height': '100px', 'width': '100px'});
$('body').append('<div class= "2"></div>');
$('.2').css({'background-color': 'blue', 'height': '100px', 'width': '100px'});
$('body').append('<div class= "3"></div>');
$('.3').css({'background-color': 'yellow', 'height': '100px', 'width': '100px'});
$('body').append('<div class= "4"></div>');
$('.4').css({'background-color': 'green', 'height': '100px', 'width': '100px'});

alert('Try and pick the right color!');

$('div').on('click', function(){

var random = Math.floor(Math.random() * colorArray.length + 1);
// console.log(random);

if($(this).attr('class') == random) {
  alert('You picked the right color.  Pick again!');
} else {
  alert('Not the right color, try again.');
}
});



});

function Colorblock(idnumber, color, height, width){
  this.idnumber = idnumber;
  this.color = color;
  this.height = '100px';
  this.width = '100px';
}

var red = new Colorblock(1, 'red');
var blue = new Colorblock(2, 'blue');
var yellow = new Colorblock(3, 'yellow');
var green = new Colorblock(4, 'green');

var colorArray = [red, blue, yellow, green];


var orange = new Colorblock(5, 'orange');
colorArray.push(orange);

console.log(colorArray);

// for(i = 0; i < colorArray.length; i++){
//   $('body').append('<div class= "i+1"></div>');
//   $('this[i]').css({'background-color': 'this[i][1]', 'height': '100px', 'width': '100px'});
//
// }
