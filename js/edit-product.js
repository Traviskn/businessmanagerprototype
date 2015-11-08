$('#linkInventory').change(function(){
  if (this.checked) {
    $('#linkInv').show();
  } else {
    $('#linkInv').hide();
  }
});

$(document).ready(function() {
   $('select').material_select();
 });
