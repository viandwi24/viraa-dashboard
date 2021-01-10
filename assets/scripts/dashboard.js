/* eslint-disable no-console */
module.exports = function () {
  let rootQuery = '.dashboard'
  let sidebarRightMobileShow = false
  let sidebarLeftMobileShow = false
  let searchShow = false

  // dom
  let sidebarRight
  let sidebarRightOverlay
  let sidebarRightToggle
  let sidebarLeft
  let sidebarLeftOverlay
  let sidebarLeftToggle
  let searchToggle
  let searchClose
  let searchOverlay

  // init
  const init = function (query) {
    rootQuery = query
    binding()
  }

  // toggle action
  const toggleSidebarRight = function () {
    if (sidebarRightMobileShow) {
      sidebarRightOverlay.classList.remove('hidden')
      sidebarRightOverlay.classList.add('block')
      sidebarRight.classList.add('mobile-show')
      sidebarRight.animate([
        { right: `-${sidebarRight.offsetWidth}px` },
        { right: '0px' }
      ], {
        duration: 400,
        easing: 'ease-in'
      })
    } else {
      sidebarRight.animate([
        { right: '0px' },
        { right: `-${sidebarRight.offsetWidth}px` }
      ], {
        duration: 400,
        easing: 'ease-out'
      })
      setTimeout(function () {
        sidebarRightOverlay.classList.add('hidden')
        sidebarRightOverlay.classList.remove('block')
        sidebarRight.classList.remove('mobile-show')
      }, 400)
    }
  }
  const toggleSidebarLeft = function () {
    if (sidebarLeftMobileShow) {
      sidebarLeftOverlay.classList.remove('hidden')
      sidebarLeftOverlay.classList.add('block')
      sidebarLeft.classList.add('mobile-show')
      sidebarLeft.animate([
        { left: `-${sidebarLeft.offsetWidth}px` },
        { left: '0px' }
      ], {
        duration: 400,
        easing: 'ease-in'
      })
    } else {
      sidebarLeft.animate([
        { left: '0px' },
        { left: `-${sidebarLeft.offsetWidth}px` }
      ], {
        duration: 400,
        easing: 'ease-out'
      })
      setTimeout(function () {
        sidebarLeftOverlay.classList.add('hidden')
        sidebarLeftOverlay.classList.remove('block')
        sidebarLeft.classList.remove('mobile-show')
      }, 400)
    }
  }
  const toggleSearch = function () {
    if (searchShow) {
      searchOverlay.classList.remove('hidden')
      searchOverlay.classList.add('block')
      searchOverlay.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 400,
        easing: 'ease-in'
      })
    } else {
      searchOverlay.animate([
        { opacity: 1 },
        { opacity: 0 }
      ], {
        duration: 400,
        easing: 'ease-in'
      })
      setTimeout(function () {
        searchOverlay.classList.add('hidden')
        searchOverlay.classList.remove('block')
      }, 300)
    }
  }

  const binding = function () {
    sidebarRight = document.querySelector(`${rootQuery} .sidebar.right`)
    sidebarRightOverlay = document.querySelector(`${rootQuery} .overlay .overlay-sidebar-right`)
    sidebarRightToggle = document.querySelector(`${rootQuery} .sidebar-right-toggle`)
    sidebarLeft = document.querySelector(`${rootQuery} .sidebar.left`)
    sidebarLeftOverlay = document.querySelector(`${rootQuery} .overlay .overlay-sidebar-left`)
    sidebarLeftToggle = document.querySelector(`${rootQuery} .sidebar-left-toggle`)
    searchToggle = document.querySelector(`${rootQuery} .search-toggle`)
    searchClose = document.querySelector(`${rootQuery} .overlay .overlay-search .close`)
    searchOverlay = document.querySelector(`${rootQuery} .overlay .overlay-search`)

    // toggle button
    sidebarRightToggle.addEventListener('click', function () {
      sidebarRightMobileShow = !sidebarRightMobileShow
      toggleSidebarRight()
    })
    sidebarRightOverlay.addEventListener('click', function () {
      sidebarRightMobileShow = !sidebarRightMobileShow
      toggleSidebarRight()
    })
    sidebarLeftToggle.addEventListener('click', function () {
      sidebarLeftMobileShow = !sidebarLeftMobileShow
      toggleSidebarLeft()
    })
    sidebarLeftOverlay.addEventListener('click', function () {
      sidebarLeftMobileShow = !sidebarLeftMobileShow
      toggleSidebarLeft()
    })
    searchToggle.addEventListener('click', function () {
      searchShow = !searchShow
      toggleSearch()
    })
    searchClose.addEventListener('click', function () {
      searchShow = !searchShow
      toggleSearch()
    })
  }

  return {
    init,
    binding
  }
}
