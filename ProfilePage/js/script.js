const swithModal = () => {
  const modal = document.querySelector('.modal')
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }
}

const btn = document.querySelector('.modal-btn')
btn.addEventListener('click', swithModal)

window.onclick = function(event) {
  const modal = document.querySelector('.modal')
  if (event.target == modal) {
    swithModal()
  }
}