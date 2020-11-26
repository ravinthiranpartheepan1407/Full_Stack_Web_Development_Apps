function bird()
{
  var bi = document.getElementById('ponk').value;
  var hi = document.getElementById('zino').value;
  var ci = (hi/bi);
  var di = '79';
  var ei = (di/bi);
  document.getElementById('btd').innerHTML = Math.floor(ci) + " " + 'years old.';
  document.getElementById('bttdds').innerHTML = Math.floor(ei)+ " " + 'years' + " " + 'with respect to your age.';
}
