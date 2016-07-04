import './vendor/jquery.fitvids.js'
import $ from 'jquery'
window.$ = $

$(() => {
  $('a[href^="http"]').attr('target','_blank')
  $('.js-post-content').fitVids({ customSelector: 'iframe[src*="slideshare.net"]' })
})
