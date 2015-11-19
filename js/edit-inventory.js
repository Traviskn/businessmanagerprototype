jQuery(function($) {
  var $priceContainer = $('#priceContainer');
  $priceContainer.show();
});

jQuery(function($) {
  var $checks = $('.checkbox-container input:checkbox').click(function() {
    var checked = $checks.is(':checked');
    $('#priceContainer').toggle(checked);
  });
});

$(document).ready(function() {
   $('select').material_select();
 });
