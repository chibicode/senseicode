import $ from 'jquery'
window.$ = $

$(() => {
  $('a[href^="http"]').attr('target','_blank')
})
