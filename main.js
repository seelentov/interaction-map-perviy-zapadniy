import data from './data.js'
import scrollable from './scrollable.js'
import createItems from './createItems.js'

document.addEventListener("DOMContentLoaded", () => {
  createItems(data)
  scrollable('.scrollable-container')
})