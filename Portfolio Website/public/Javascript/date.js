function dates()
{
var newDate = document.getElementById('day').value;
var oldDate = document.getElementById('days').value;
var newMonth = document.getElementById('dayss').value;
var oldMonth = document.getElementById('daysss').value;
var newYear = document.getElementById('dayssss').value;
var oldYear = document.getElementById('daysssss').value;
//var one = 86400000;
var diff = Math.floor(Math.abs(newDate - oldMonth));
var difff = Math.floor(Math.abs(oldDate - newYear));
var diffff = Math.floor(Math.abs(newMonth - oldYear));
document.getElementById('dix').innerHTML = 'selected new date and old date' + " " + 'is' + " " + diff + " " + "days" + ',' + " " + difff + " " + 'months' + " " + 'and' + " " + diffff + " " + 'years' + ".";
var hours = Math.floor(diff * 24); //+ (difff * 24) + (diffff * 24));
var mins = Math.floor(difff * 43800); //+ (difff * 1440) + (diffff * 1440));
var secs = Math.floor(diffff * 31536000); //+ (difff * 86400) + (diffff * 86400));
$('#vix').text('According to the output data, the time unit differences were' + " " + hours + " " + 'hours' + "," + mins + " " + 'minutes' + "," + secs + " " + 'seconds' + ".");
$('#dold').addEventListener('click', function(){
  $('p').style.color = 'blue'
;});
//$(document).keypress(function(event){
  //$('h2').text(event.key);
//});
//$("input").on("click", myfunction())
//function myfunction()
//{
  //$('p').hover({color : "yellow"});
//}
return diff;
return difff;
return diffff;
return hours;
return mins;
return secs;
}
