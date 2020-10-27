export default class CloseModal{
    constructor(open, close, modal){
        this.open = document.querySelector(open)
        this.close = document.querySelector(close)
        this.modal = document.querySelector(modal)
    }

    addEvent(){
        this.open.addEventListener('click',()=>{
            this.openCloseModal()
        })
        this.close.addEventListener('click',()=>{
            this.openCloseModal()
        })
    }

    openCloseModal(){
        this.modal.classList.toggle("show-modal")
    }

    init(){
      this.addEvent()  
      console.log(this.modal)   
    }
}



