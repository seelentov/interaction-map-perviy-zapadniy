export default (component) => {
  let isScrolling = false
  let startX, startY, scrollLeft, scrollTop

  const container = document.querySelector(component)
  container.style.overflow = 'scroll'

  container.addEventListener('mousedown', (e) => {
    isScrolling = true
    startX = e.pageX - container.offsetLeft
    startY = e.pageY - container.offsetTop
    scrollLeft = container.scrollLeft
    scrollTop = container.scrollTop
  })

  container.addEventListener('mouseleave', () => {
    isScrolling = false
  })

  container.addEventListener('mouseup', () => {
    isScrolling = false
  })

  container.addEventListener('mousemove', (e) => {
    if (!isScrolling) return
    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const y = e.pageY - container.offsetTop
    const walkX = (x - startX)
    const walkY = (y - startY)
    container.scrollLeft = scrollLeft - walkX
    container.scrollTop = scrollTop - walkY
  })

  //container.addEventListener('wheel', (e) => {
  //  e.preventDefault();
  //  const zoomSpeed = 0.1; 
  //  container.scrollLeft += e.deltaY;
  //  container.scrollTop += e.deltaX;
  //  container.style.transform = `scale(${1 + e.deltaY * zoomSpeed})` 
  //});
}