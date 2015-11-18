jQuery(function($) {
  var $quantityContainer = $('#quantityContainer');
  var $costContainer = $('#costContainer');
  $quantityContainer.hide();
  $costContainer.hide();
});

jQuery(function($) {
  var $checks = $('.checkbox-container input:checkbox').click(function() {
    var checked = $checks.is(':checked');
    $('#quantityContainer').toggle(checked);
    $('#costContainer').toggle(checked);
  });
});

$(document).ready(function() {
   $('select').material_select();
 });
