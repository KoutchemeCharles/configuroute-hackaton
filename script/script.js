/*$('select.dropdown')
  .dropdown('set selected', ['meteor', 'ember'])
;*/

$(document).ready(function(){

  $('select.dropdown').dropdown('set selected', ['meteor', 'ember']);
  $('.tabular.menu .item').tab();
});