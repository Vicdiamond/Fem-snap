'use strict'
const navDrops = document.querySelectorAll('.nav')
const drops = document.querySelectorAll('.drop')
const imgArrows = document.querySelectorAll('.img')

let hidden = true
console.log()

navDrops.forEach(navDrop =>
  navDrop.addEventListener('click', function (e) {
    e.preventDefault()
    const clicked = e.target.closest('.dropdown')
    // console.log(navDrop)

    if (!clicked) return

    const imgArrow = document.querySelector(`.img_down-${clicked.dataset.drop}`)
    drops.forEach(drop => drop.classList.add('hidden'))
    imgArrows.forEach(img => (img.src = './images/icon-arrow-down.svg'))

    hidden
      ? document
          .querySelector(`.dropdown_el-${clicked.dataset.drop}`)
          .classList.remove('hidden')
      : document
          .querySelector(`.dropdown_el-${clicked.dataset.drop}`)
          .classList.add('hidden')

    hidden
      ? (imgArrow.src = './images/icon-arrow-up.svg')
      : (imgArrow.src = './images/icon-arrow-down.svg')
    hidden = !hidden
  })
)

// Sidebar
document.querySelector('.sidebar').addEventListener('click', function () {
  document.querySelector('.sidebar_content').classList.remove('hidden')
})
document.querySelector('.sidebar_close').addEventListener('click', function () {
  document.querySelector('.sidebar_content').classList.add('hidden')
})
