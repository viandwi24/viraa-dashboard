/* eslint-disable no-console */
const OverlayScrollbars = require('overlayscrollbars')

module.exports = function () {
  let rootQuery = '.dashboard'
  let sidebarRightMobileShow = false
  let sidebarLeftMobileShow = false
  let searchShow = false

  // component
  let sidebarLeftOverlayscrollbarsInstance

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
    overlayScrollbarsInit()
    sidebarLeftInit()
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
      setTimeout(function () {
        overlayScrollbarsDestroy()
        overlayScrollbarsInit()
      }, 400)
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

  // sidebar
  const sidebarLeftInit = function () {
    sidebarLeftOverlayscrollbarsInstance.scroll(document.querySelector('.item.active'), 500)
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
    window.addEventListener('resize', function () {
      overlayScrollbarsDestroy()
      overlayScrollbarsInit()
    })
  }

  const overlayScrollbarsInit = function () {
    const options = {
      className: 'os-theme-minimal-dark',
      sizeAutoCapable: true,
      scrollbars: {
        visibility: 'auto',
        autoHide: 'leave',
        clickScrolling: true
      }
    }
    sidebarLeftOverlayscrollbarsInstance = OverlayScrollbars(document.querySelector(`${rootQuery} .sidebar.left .scrollable`), options)
    // overlayscrollbarsInstance = OverlayScrollbars(document.querySelector(`${rootQuery} .sidebar.left .scrollable`), options)
  }

  const overlayScrollbarsDestroy = function () {
    sidebarLeftOverlayscrollbarsInstance?.destroy()
  }

  // return
  return {
    init,
    binding,
    overlayScrollbarsInit,
    overlayScrollbarsDestroy
  }
}
