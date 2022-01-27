var modalTrigger = document.getElementById('modal-trigger')
var modalCloserSign = document.getElementById('closer-sign')
var modalcloserBtn = document.getElementById('closer-btn')
var Modal = document.getElementById('intro-modal');
modalTrigger.addEventListener('click' , ()=>{
Modal.style.display = "block"
Modal.classList.add('show');
}) 

modalCloserSign.addEventListener('click' , ()=> {
  Modal.style.display = "none"
  Modal.classList.remove('show');
})


modalcloserBtn.addEventListener('click' , ()=>{
    Modal.style.display = 'none'
    Modal.classList.remove('show');
  })
