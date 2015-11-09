jQuery(function($) {
  var $optionsContainer = $('#costContainer');
  $optionsContainer.hide();
});

jQuery(function($) {
  var $checks = $('.checkbox-container input:checkbox').click(function() {
    var checked = $checks.is(':checked');
    $('#costContainer').toggle(!checked);
    $('#linkInv').toggle(checked);
  });
});

$(document).ready(function() {
   $('select').material_select();
 });
