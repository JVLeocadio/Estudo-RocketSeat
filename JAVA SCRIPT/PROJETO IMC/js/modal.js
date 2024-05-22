export const Modal = {
    
    Wrapper : document.querySelector('.modal-wrapper'),
    message : document.querySelector ('.modal-wrapper .title span'),
    btnClose : document.querySelector ('.modal-wrapper button.close'),
    
    open () {
        Modal.Wrapper.classList.add('open')
    },

    close() {
        Modal.Wrapper.classList.remove('open')
    }

 }

 Modal.btnClose.onclick = () => {
    Modal.close()
}

window.addEventListener ('keydown' , handleKeydown)
function  handleKeydown (event) {
    if (event.key === 'Escape') {
        Modal.close()
    }

}