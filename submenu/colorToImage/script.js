var colorPicker = colorPicker || {};

colorPicker.addValueListeners = function(className) {
  var valueElements = document.getElementsByClassName(className);
  for (var i = 0; i < valueElements.length; i++) {
    valueElements[i].addEventListener('input', colorPicker.updatePreview);
  }
};

colorPicker.updatePreview = function() {
  var preview = document.getElementById('preview');
  var rValue = document.getElementById('r-value').value;
  var gValue = document.getElementById('g-value').value;
  var bValue = document.getElementById('b-value').value;

  if (rValue !== '' && gValue !== '' && bValue !== '' &&
      rValue >=0 && rValue <= 255 &&
      gValue >=0 && gValue <= 255 &&
      bValue >=0 && bValue <= 255) {
    document.body.style.background = 'rgb(' + rValue + ',' + gValue + ',' + bValue + ')';
    var rgb = ('rgb(' + rValue + ',' + gValue + ',' + bValue + ')');
    console.log(rgb);
    document.getElementById("write").innerHTML = rgb;
    function rgb2hex(rgb){
     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
}
   };
};
colorPicker.addValueListeners('value');
