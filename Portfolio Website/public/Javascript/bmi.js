function bmi()
{
  var weight = document.getElementById('wg').value;
  var height = document.getElementById('hg').value;
  var cal = weight / (height * height);
  if(cal < 18.5)
  {
    document.getElementById('mix').innerHTML = 'Your BMI is :' + " " + Math.floor (cal) + " " + "," + " " + 'so you have underweight.';
    return cal;
  }
  else if(cal > 18.5 && cal < 24.9)
  {
    document.getElementById('mix').innerHTML = 'Your BMI is :' + " " + Math.floor(cal) + " " + "," + " " + 'so you are normal.';
    return cal;
  }
  else(cal > 25 && cal < 29.9)
  {
    document.getElementById('mix').innerHTML = 'Your BMI is :' + " " + Math.floor(cal) + " " + "," + " " + 'so you have overweight.';
    return cal;
  }
}
