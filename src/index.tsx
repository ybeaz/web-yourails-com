import { initializeBrowserApp } from './initializeBrowserApp'

window.addEventListener('load', function () {
  document.getElementById('root').innerHTML = ''
  setTimeout(() => {
    document.getElementsByTagName('body')[0].style.visibility = 'visible'
  }, 500)
  initializeBrowserApp()
  document.getElementsByTagName('body')[0].style.visibility = 'visible'
})
