import $ from 'jquery'

$(() => {
  $('a[href^="http"]').attr('target','_blank')
})
