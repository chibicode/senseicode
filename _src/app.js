import 'tachyons/src/tachyons.css'
import 'colors.css/src/colors.css'
import './css/app.css'

import $ from 'jquery'

$(() => {
  $('a[href^="http"]').attr('target','_blank')
})
