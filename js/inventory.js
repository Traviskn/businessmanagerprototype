jQuery(function($) {
  var $salesContainer = $('#salesPriceContainer');
  $salesContainer.hide();
});

jQuery(function($) {
  var $checks = $('.checkbox-container input:checkbox').click(function() {
    var checked = $checks.is(':checked');
    $('#salesPriceContainer').toggle(checked);
  });
});
